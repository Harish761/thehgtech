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
        # Read Sarvam AI configuration from environment with robust default fallback
        self.sarvam_key = (os.getenv("SARVAM_API_KEY") or "").strip()
        self.sarvam_model = (os.getenv("SARVAM_MODEL") or "").strip() or "sarvam-105b"
        self.last_provider = "None"
        self.last_finish_reason = None
        self.last_status_code = None
        self.last_usage = {}
        self.last_content_length = 0
        self.last_reasoning_tokens = None

    @staticmethod
    def clean_markdown_labels(text: str) -> str:
        """
        Normalize markdown-styled keys (e.g., **Date:** -> Date:), optional numbering
        (e.g., 1. Date: -> Date:), and harmless label aliases (e.g., Source: -> Source Name:),
        and strip code fence wrappers so downstream regex parsers match reliably.
        """
        if not text:
            return ""

        # Remove outer code block wrappers if present (e.g. ```text ... ```)
        cleaned = re.sub(r'^```(?:text|markdown)?[ \t]*\n', '', text.strip(), flags=re.IGNORECASE)
        cleaned = re.sub(r'\n```[ \t]*$', '', cleaned).strip()

        # Remove standalone short/article numbering headers on their own line (e.g. "Short 1:", "1.")
        cleaned = re.sub(
            r'^[ \t]*(?:#+\s*)?(?:\*{1,2}|_{1,2})?(?:(?:Short|Article|Item)\s+\d+|\d+)(?:[\.\)\-:])?(?:\*{1,2}|_{1,2})?[ \t]*$',
            '',
            cleaned,
            flags=re.MULTILINE | re.IGNORECASE
        )

        canonical_map = {
            "date": "Date",
            "source name": "Source Name",
            "source url": "Source URL",
            "url": "Source URL",
            "source link": "Source URL",
            "article url": "Source URL",
            "article id": "Source URL",
            "headline": "Headline",
            "title": "Title",
            "content": "Content",
            "entities": "Entities",
        }

        # Normalize known headers if formatted with optional numbering, bullets, or markdown bold
        def _replace_canonical(match: re.Match) -> str:
            raw_label = re.sub(r'\s+', ' ', match.group(1).strip().lower())
            canonical = canonical_map.get(raw_label, match.group(1).strip())
            return f"{canonical}: "

        cleaned = re.sub(
            r'^[ \t]*(?:#+\s*|[-*•]\s*)?(?:\*{1,2}|_{1,2})?(?:(?:Short|Article|Item)\s+\d+[\.\)\-:]?\s*|\d+[\.\)\-]\s*)?(?:\*{1,2}|_{1,2})?(Date|Source\s+Name|Source\s+URL|Source\s+Link|Article\s+URL|Article\s+ID|URL|Headline|Title|Content|Entities)(?:\*{1,2}|_{1,2})?[ \t]*:(?:\*{1,2}|_{1,2})?[ \t]*',
            _replace_canonical,
            cleaned,
            flags=re.MULTILINE | re.IGNORECASE
        )

        # Normalize harmless "Source: <value>" variation to "Source Name: <value>"
        # when the value is a publication name rather than a URL/placeholder
        def _replace_source_alias(match: re.Match) -> str:
            val = match.group(1).strip()
            if re.match(r'^(?:https?://|ARTICLE_\d+_URL_PLACEHOLDER)', val, flags=re.IGNORECASE):
                return f"Source URL: {val}"
            return f"Source Name: {val}"

        cleaned = re.sub(
            r'^[ \t]*(?:#+\s*|[-*•]\s*)?(?:\*{1,2}|_{1,2})?(?:(?:Short|Article|Item)\s+\d+[\.\)\-:]?\s*|\d+[\.\)\-]\s*)?(?:\*{1,2}|_{1,2})?Source(?:\*{1,2}|_{1,2})?[ \t]*:(?:\*{1,2}|_{1,2})?[ \t]*(.+)$',
            _replace_source_alias,
            cleaned,
            flags=re.MULTILINE | re.IGNORECASE
        )

        return cleaned

    def sanitize_diagnostic_text(self, text: str) -> str:
        """
        Sanitize diagnostic text to ensure no API keys, tokens, or credentials
        leak into logs.
        """
        if not text:
            return ""
        clean = str(text)
        if self.sarvam_key:
            clean = clean.replace(self.sarvam_key, "[REDACTED_API_KEY]")
        # Redact Bearer tokens
        clean = re.sub(r'Bearer\s+[a-zA-Z0-9_\-\.]+', 'Bearer [REDACTED]', clean, flags=re.IGNORECASE)
        # Redact potential keys or long credential tokens (20+ chars)
        clean = re.sub(r'[a-zA-Z0-9_\-]{20,}', '[REDACTED]', clean)
        # Truncate length
        if len(clean) > 200:
            clean = clean[:197] + "..."
        return clean

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
        temperature: float = 0.3,
        reasoning_effort: Optional[str] = None,
    ) -> Optional[str]:
        """
        Direct chat completion call to Sarvam AI with bounded retries for transient errors
        and fast-fail for permanent auth/billing/client errors.
        Never logs API keys or authorization headers.
        """
        self.last_finish_reason = None
        self.last_status_code = None
        self.last_usage = {}
        self.last_content_length = 0
        self.last_reasoning_tokens = None

        if not self.sarvam_key:
            print("    [Router] ❌ Sarvam client not available: SARVAM_API_KEY is not set.")
            return None

        if not REQUESTS_AVAILABLE:
            print("    [Router] ❌ Python 'requests' package not available for Sarvam API.")
            return None

        target_model = (model or "").strip() or self.sarvam_model or "sarvam-105b"
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

        # Resolve reasoning_effort: explicit argument or SARVAM_REASONING_EFFORT env var, defaulting to None (disabled)
        effort = reasoning_effort if reasoning_effort is not None else os.getenv("SARVAM_REASONING_EFFORT")
        if effort is not None and not str(effort).strip():
            effort = None

        payload = {
            "model": target_model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
            "reasoning_effort": effort,
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
                self.last_status_code = status_code

                if status_code == 200:
                    data = response.json()
                    choices = data.get("choices", []) if isinstance(data, dict) else []
                    first_choice = choices[0] if (isinstance(choices, list) and len(choices) > 0 and isinstance(choices[0], dict)) else {}
                    msg = first_choice.get("message") if isinstance(first_choice, dict) else {}
                    raw_content = msg.get("content") if isinstance(msg, dict) else None
                    content_len = len(raw_content) if isinstance(raw_content, str) else 0
                    finish_reason = first_choice.get("finish_reason") if isinstance(first_choice, dict) else None
                    usage_obj = data.get("usage") if isinstance(data, dict) else None
                    reasoning_tokens = None
                    if isinstance(usage_obj, dict):
                        comp_details = usage_obj.get("completion_tokens_details")
                        if isinstance(comp_details, dict) and "reasoning_tokens" in comp_details:
                            reasoning_tokens = comp_details.get("reasoning_tokens")

                    self.last_finish_reason = finish_reason
                    self.last_content_length = content_len
                    self.last_usage = usage_obj if isinstance(usage_obj, dict) else {}
                    self.last_reasoning_tokens = reasoning_tokens

                    # Responses truncated by token limit (finish_reason='length') must not be accepted as complete
                    if finish_reason != "length" and isinstance(raw_content, str) and raw_content.strip():
                        returned_model = data.get("model", target_model) if isinstance(data, dict) else target_model
                        usage = self.last_usage
                        
                        prompt_tok = usage.get("prompt_tokens", 0) if isinstance(usage, dict) else 0
                        comp_tok = usage.get("completion_tokens", 0) if isinstance(usage, dict) else 0
                        tot_tok = usage.get("total_tokens", 0) if isinstance(usage, dict) else 0
                        
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
                        if finish_reason == "length":
                            print("    [Router] ⚠️ Response truncated by token limit (finish_reason='length').")
                        
                        # Extract diagnostic metadata defensively without exposing sensitive payloads
                        resp_keys = list(data.keys()) if isinstance(data, dict) else []
                        
                        # Usage diagnostics
                        if isinstance(usage_obj, dict) and usage_obj:
                            usage_repr = (
                                f"prompt={usage_obj.get('prompt_tokens')}, "
                                f"completion={usage_obj.get('completion_tokens')}, "
                                f"total={usage_obj.get('total_tokens')}"
                            )
                        else:
                            usage_repr = "none"

                        reasoning_tok_repr = str(reasoning_tokens) if reasoning_tokens is not None else "none"
                        
                        # Reasoning content detection (never used as substitute for content)
                        has_reasoning = False
                        reasoning_len = 0
                        if isinstance(msg, dict) and "reasoning_content" in msg and msg["reasoning_content"] is not None:
                            has_reasoning = True
                            r_val = msg["reasoning_content"]
                            reasoning_len = len(r_val) if isinstance(r_val, (str, list, dict)) else len(str(r_val))
                        reasoning_repr = f"present (len={reasoning_len})" if has_reasoning else "none"

                        # Provider error detection under HTTP 200
                        provider_err_repr = "none"
                        if isinstance(data, dict):
                            err_val = data.get("error") or data.get("error_code")
                            if err_val:
                                if isinstance(err_val, dict):
                                    e_code = err_val.get("code") or err_val.get("type") or ""
                                    e_msg = err_val.get("message") or err_val.get("error") or ""
                                    parts = []
                                    if e_code:
                                        parts.append(f"code={e_code}")
                                    if e_msg:
                                        parts.append(f"message={e_msg}")
                                    raw_err = ", ".join(parts) if parts else str(err_val)
                                else:
                                    raw_err = str(err_val)
                                provider_err_repr = self.sanitize_diagnostic_text(raw_err)

                        print(
                            f"    [Router] 🔍 Diagnostics: status={status_code} | "
                            f"response_keys={resp_keys} | "
                            f"finish_reason={finish_reason} | "
                            f"content_len={content_len} | "
                            f"usage={usage_repr} | "
                            f"reasoning_tokens={reasoning_tok_repr} | "
                            f"reasoning_content={reasoning_repr} | "
                            f"provider_error={provider_err_repr}"
                        )
                        return None

                # Extract sanitized error message without leaking sensitive data
                err_msg = ""
                try:
                    err_json = response.json()
                    err_msg = err_json.get("error", {}).get("message") or err_json.get("message", "")
                except Exception:
                    err_msg = response.text[:200]
                
                err_clean = self.sanitize_diagnostic_text(err_msg)

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
        temperature: float = 0.3,
        reasoning_effort: Optional[str] = None,
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
            temperature=temperature,
            reasoning_effort=reasoning_effort,
        )


# Singleton instance for easy importing
ai_router = AIRouter()


