import os
import time
from typing import Optional

try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False

class AIRouter:
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY", "")
        self.client = None
        
        if self.api_key and OPENAI_AVAILABLE:
            self.client = OpenAI(api_key=self.api_key)
            
        self.last_provider = "None"

    def call_openai(self, prompt: str, system_prompt: str = "", max_tokens: int = 1000, model: str = "gpt-4o", temperature: float = 0.3) -> Optional[str]:
        if not self.client:
            print("    [Router] ⚠️ OpenAI client not available. Is OPENAI_API_KEY set?")
            return None
            
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        print(f"    [Router] 🟢 Attempting OpenAI ({model})...")
        try:
            response = self.client.chat.completions.create(
                model=model,
                messages=messages,
                temperature=temperature,
                max_tokens=max_tokens
            )
            self.last_provider = f"OpenAI ({model})"
            print(f"    [Router] ✅ Success! Task completed using {self.last_provider}")
            return response.choices[0].message.content
        except Exception as e:
            print(f"    [Router] ❌ OpenAI Failed: {e}")
            return None

    def generate_content(self, prompt: str, task_type: str = "general", system_prompt: str = "", max_tokens: int = 1000, temperature: float = 0.3) -> Optional[str]:
        """
        Uses OpenAI directly. Routes tasks intelligently to save cost:
        - "shorts": gpt-4o (requires highest reasoning for journalistic writing)
        - "cve" / "threat_intel": gpt-4o-mini (perfect for structured JSON output and binary analysis)
        """
        result = None
        
        # We retry a few times natively just in case of transient network issues
        max_retries = 2
        
        for attempt in range(max_retries):
            if task_type == "shorts":
                result = self.call_openai(prompt, system_prompt, max_tokens, model="gpt-4o", temperature=temperature)
            elif task_type in ["cve", "threat_intel"]:
                result = self.call_openai(prompt, system_prompt, max_tokens, model="gpt-4o-mini", temperature=temperature)
            else:
                result = self.call_openai(prompt, system_prompt, max_tokens, model="gpt-4o-mini", temperature=temperature)
                
            if result:
                break
            else:
                print(f"    [Router] ⚠️ Retrying... (Attempt {attempt + 1}/{max_retries})")
                time.sleep(2)
                
        return result

# Singleton instance for easy importing
ai_router = AIRouter()

