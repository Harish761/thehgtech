import os
import re
import time
from typing import Optional

try:
    import requests
    REQUESTS_AVAILABLE = True
except ImportError:
    REQUESTS_AVAILABLE = False


class AIRouter:
    """
    Direct LLM Router for TheHGTech automation.
    Configured exclusively for Sarvam AI. No fallbacks to OpenAI or OpenRouter.
    """

    def __init__(self):
        # Read Sarvam AI configuration from environment
        self.sarvam_key = os.getenv("SARVAM_API_KEY", "").strip()
        self.sarvam_model = os.getenv("SARVAM_MODEL", "sarvam-105b").strip()
        self.last_provider = "None"

    @staticmethod
    def clean_markdown_labels(text: str) -> str:
        """
        Normalize markdown-styled keys (e.g., **Date:** -> Date:)
        and strip code fence wrappers so downstream regex parsers match reliably.
        """
        if not text:
            return ""

        # Remove outer code block wrappers if present (e.g. ```text ... ```)
        cleaned = re.sub(r'^```(?:text|markdown)?\s*\n', '', text.strip(), flags=re.IGNORECASE)
        cleaned = re.sub(r'\n```\s*$', '', cleaned).strip()

        # Normalize known headers if formatted with markdown bold or leading symbols
        cleaned = re.sub(
            r'^\s*(?:\*{1,2}|#+\s*|[-*]\s*)?(Date|Source Name|Source URL|Headline|Title|Content|Entities)(?:\*{1,2})?:(?:\*{1,2})?\s*',
            r'\1: ',
            cleaned,
            flags=re.MULTILINE
        )

        return cleaned

    def get_sarvam_endpoint(self, model: str) -> str:
        """Determine whether to use v1 or v2 chat completions endpoint based on model identifier."""
        v2_models = {"deepseekv4-flash", "deepseekv4.1-flash", "gemma4", "glm5.2", "glm5.3"}
        custom_endpoint = os.getenv("SARVAM_CHAT_ENDPOINT", "").strip()
        if custom_endpoint:
            return custom_endpoint
        if any(v2 in model.lower() for v2 in v2_models):
            return "https://api.sarvam.ai/v2/chat/completions"
        return "https://api.sarvam.ai/v1/chat/completions"

    def call_sarvam(
        self,
        prompt: str,
        system_prompt: str = "",
        max_tokens: int = 4000,
        model: Optional[str] = None,
        temperature: float = 0.3
    ) -> Optional[str]:
        """
        Direct chat completion call to Sarvam AI with bounded retries for transient errors
        and fast-fail for permanent auth/billing/client errors.
        Never logs API keys or authorization headers.
        """
        if not self.sarvam_key:
            print("    [Router] ❌ Sarvam client not available: SARVAM_API_KEY is not set.")
            return None

        if not REQUESTS_AVAILABLE:
            print("    [Router] ❌ Python 'requests' package not available for Sarvam API.")
            return None

        target_model = model or self.sarvam_model
        endpoint = self.get_sarvam_endpoint(target_model)

        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        headers = {
            "Content-Type": "application/json",
            "api-subscription-key": self.sarvam_key,
            "Authorization": f"Bearer {self.sarvam_key}",
        }

        payload = {
            "model": target_model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
        }

        # Bounded retries for transient errors only (429, 5xx, network timeouts)
        max_retries = 2
        for attempt in range(max_retries + 1):
            print(
                f"    [Router] 🟢 Invoking Sarvam AI [Attempt {attempt + 1}/{max_retries + 1}] | "
                f"Model: {target_model} | Tokens Limit: {max_tokens}"
            )
            try:
                response = requests.post(endpoint, headers=headers, json=payload, timeout=90)
                status_code = response.status_code

                if status_code == 200:
                    data = response.json()
                    choices = data.get("choices", [])
                    if choices and "message" in choices[0] and choices[0]["message"].get("content"):
                        raw_content = choices[0]["message"]["content"]
                        returned_model = data.get("model", target_model)
                        usage = data.get("usage", {})
                        
                        prompt_tok = usage.get("prompt_tokens", 0)
                        comp_tok = usage.get("completion_tokens", 0)
                        tot_tok = usage.get("total_tokens", 0)
                        
                        # Sarvam 105B pricing: ₹29.28/1M in, ₹73.20/1M out
                        in_cost = (prompt_tok / 1_000_000) * 29.28
                        out_cost = (comp_tok / 1_000_000) * 73.20
                        est_cost = in_cost + out_cost

                        print(f"    [Router] ✅ Sarvam API Response: HTTP 200 OK | Model: {returned_model}")
                        print(
                            f"    [Router] 📊 Token Usage: {prompt_tok} prompt, "
                            f"{comp_tok} completion, {tot_tok} total | Est Cost: ₹{est_cost:.4f}"
                        )

                        self.last_provider = f"Sarvam ({returned_model})"
                        return self.clean_markdown_labels(raw_content)
                    else:
                        print("    [Router] ⚠️ Sarvam response missing valid 'choices' or content.")
                        return None

                # Extract sanitized error message without leaking sensitive data
                err_msg = ""
                try:
                    err_json = response.json()
                    err_msg = err_json.get("error", {}).get("message") or err_json.get("message", "")
                except Exception:
                    err_msg = response.text[:200]
                
                # Sanitize any accidental credential string
                err_clean = str(err_msg)
                if self.sarvam_key and self.sarvam_key in err_clean:
                    err_clean = err_clean.replace(self.sarvam_key, "[REDACTED_API_KEY]")
                err_clean = re.sub(r'[a-zA-Z0-9_\-]{20,}', '[REDACTED]', err_clean)

                # Permanent failure status codes: Fast-fail without retry
                if status_code in (400, 401, 402, 403, 404, 422):
                    print(
                        f"    [Router] ❌ Sarvam Permanent Error: HTTP {status_code} "
                        f"({err_clean or 'Unauthorized/Billing/Client Error'}). Not retrying."
                    )
                    return None

                # Transient failure status codes (429, 500, 502, 503, 504): Bounded retry with backoff
                if status_code in (429, 500, 502, 503, 504):
                    print(f"    [Router] ⚠️ Sarvam Transient Error: HTTP {status_code} ({err_clean}).")
                    if attempt < max_retries:
                        sleep_s = 2 * (attempt + 1)
                        print(f"    [Router] ⏳ Backing off for {sleep_s}s before retry...")
                        time.sleep(sleep_s)
                        continue
                    else:
                        print(f"    [Router] ❌ Sarvam retries exhausted after HTTP {status_code}.")
                        return None

                # Any other unexpected status code
                print(f"    [Router] ❌ Sarvam Unexpected HTTP {status_code}: {err_clean}. Not retrying.")
                return None

            except (requests.exceptions.Timeout, requests.exceptions.ConnectionError) as e:
                print(f"    [Router] ⚠️ Sarvam Network Error: {e.__class__.__name__}")
                if attempt < max_retries:
                    sleep_s = 2 * (attempt + 1)
                    print(f"    [Router] ⏳ Backing off for {sleep_s}s before retry...")
                    time.sleep(sleep_s)
                    continue
                else:
                    print("    [Router] ❌ Sarvam network retries exhausted.")
                    return None
            except Exception as e:
                print(f"    [Router] ❌ Sarvam Unexpected Failure: {e.__class__.__name__}")
                return None

        return None

    def generate_content(
        self,
        prompt: str,
        task_type: str = "general",
        system_prompt: str = "",
        max_tokens: int = 4000,
        temperature: float = 0.3
    ) -> Optional[str]:
        """
        Unified generation router.
        Sarvam AI is the exclusive LLM provider. No fallback to OpenAI or OpenRouter.
        """
        if not self.sarvam_key:
            print("    [Router] ❌ SARVAM_API_KEY is not set. Sarvam is the only LLM provider. No fallback permitted.")
            return None

        return self.call_sarvam(
            prompt=prompt,
            system_prompt=system_prompt,
            max_tokens=max_tokens,
            temperature=temperature
        )


# Singleton instance for easy importing
ai_router = AIRouter()


