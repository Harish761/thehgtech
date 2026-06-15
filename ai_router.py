import os
import time
import json
import requests
from typing import Optional, Dict, Any

# Optional import for Groq
try:
    from groq import Groq
    GROQ_AVAILABLE = True
except ImportError:
    GROQ_AVAILABLE = False

class AIRouter:
    def __init__(self):
        self.groq_key = os.getenv("GROQ_API_KEY", "")
        self.openrouter_key = os.getenv("OPENROUTER_API_KEY", "")
        self.hf_key = os.getenv("HF_API_KEY", "")
        
        if self.groq_key and GROQ_AVAILABLE:
            self.groq_client = Groq(api_key=self.groq_key)
        else:
            self.groq_client = None

    def call_groq(self, prompt: str, system_prompt: str = "", max_tokens: int = 1000, model: str = "llama-3.3-70b-versatile", temperature: float = 0.3) -> Optional[str]:
        if not self.groq_client:
            print("    [Router] ⚠️ Groq not available or missing key.")
            return None
        
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        print(f"    [Router] 🟢 Attempting Groq ({model})...")
        try:
            response = self.groq_client.chat.completions.create(
                messages=messages,
                model=model,
                temperature=temperature,
                max_tokens=max_tokens
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"    [Router] ❌ Groq Failed: {e}")
            return None

    def call_openrouter(self, prompt: str, system_prompt: str = "", max_tokens: int = 1000, model: str = "google/gemini-2.0-flash-lite-preview-02-05:free", temperature: float = 0.3) -> Optional[str]:
        if not self.openrouter_key:
            print("    [Router] ⚠️ OpenRouter missing key.")
            return None
            
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})

        print(f"    [Router] 🟢 Attempting OpenRouter ({model})...")
        try:
            response = requests.post(
                url="https://openrouter.ai/api/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {self.openrouter_key}",
                    "HTTP-Referer": "https://thehgtech.com", # Required by OpenRouter
                    "X-Title": "TheHGTech AI Router",
                },
                json={
                    "model": model,
                    "messages": messages,
                    "temperature": temperature,
                    "max_tokens": max_tokens
                },
                timeout=30
            )
            response.raise_for_status()
            return response.json()['choices'][0]['message']['content']
        except Exception as e:
            print(f"    [Router] ❌ OpenRouter Failed: {e}")
            return None

    def call_huggingface(self, prompt: str, max_tokens: int = 1000, model: str = "meta-llama/Llama-3.2-3B-Instruct", temperature: float = 0.3) -> Optional[str]:
        if not self.hf_key:
            print("    [Router] ⚠️ Hugging Face missing key.")
            return None
            
        print(f"    [Router] 🟢 Attempting Hugging Face ({model})...")
        try:
            API_URL = f"https://api-inference.huggingface.co/models/{model}"
            headers = {"Authorization": f"Bearer {self.hf_key}"}
            
            # Simple prompt formatting for instruction models
            formatted_prompt = f"<|user|>\n{prompt}\n<|assistant|>\n"
            
            payload = {
                "inputs": formatted_prompt,
                "parameters": {
                    "max_new_tokens": max_tokens,
                    "temperature": temperature,
                    "return_full_text": False
                }
            }
            
            response = requests.post(API_URL, headers=headers, json=payload, timeout=30)
            response.raise_for_status()
            return response.json()[0]['generated_text']
        except Exception as e:
            print(f"    [Router] ❌ Hugging Face Failed: {e}")
            return None

    def generate_content(self, prompt: str, task_type: str = "general", system_prompt: str = "", max_tokens: int = 1000, temperature: float = 0.3) -> Optional[str]:
        """
        Load-balances and falls back automatically based on the task_type.
        Valid task_types: "shorts" (Heavy), "cve" (JSON/Cache heavy), "threat_intel" (Loops)
        """
        result = None
        
        if task_type == "shorts":
            # Primary: Groq (handles massive context well)
            result = self.call_groq(prompt, system_prompt, max_tokens, temperature=temperature)
            # Fallback 1: OpenRouter Hermes 405B (massive context)
            if not result:
                time.sleep(2)
                result = self.call_openrouter(prompt, system_prompt, max_tokens, model="nousresearch/hermes-3-llama-3.1-405b:free", temperature=temperature)
            # Fallback 2: OpenRouter Gemma 4 31B
            if not result:
                time.sleep(2)
                result = self.call_openrouter(prompt, system_prompt, max_tokens, model="google/gemma-4-31b-it:free", temperature=temperature)
            # Fallback 3: HuggingFace (Extremely reliable, 8k context)
            if not result:
                time.sleep(2)
                result = self.call_huggingface(prompt, max_tokens, temperature=temperature)
            # Fallback 4: OpenRouter Llama 3
            if not result:
                time.sleep(2)
                result = self.call_openrouter(prompt, system_prompt, max_tokens, model="meta-llama/llama-3.3-70b-instruct:free", temperature=temperature)
                
        elif task_type == "cve":
            # Primary: OpenRouter Gemma 4 (Fast, good at JSON)
            result = self.call_openrouter(prompt, system_prompt, max_tokens, model="google/gemma-4-31b-it:free", temperature=temperature)
            # Fallback 1: HuggingFace (Highly reliable)
            if not result:
                time.sleep(2)
                result = self.call_huggingface(prompt, max_tokens, temperature=temperature)
            # Fallback 2: OpenRouter Llama
            if not result:
                time.sleep(2)
                result = self.call_openrouter(prompt, system_prompt, max_tokens, model="meta-llama/llama-3.3-70b-instruct:free", temperature=temperature)
            # Fallback 3: Groq
            if not result:
                time.sleep(2)
                result = self.call_groq(prompt, system_prompt, max_tokens, temperature=temperature)
                
        elif task_type == "threat_intel":
            # Primary: HuggingFace (Good for short rapid loops)
            result = self.call_huggingface(prompt, max_tokens, temperature=temperature)
            # Fallback: OpenRouter Llama 3B
            if not result:
                time.sleep(2)
                result = self.call_openrouter(prompt, system_prompt, max_tokens, model="meta-llama/llama-3.2-3b-instruct:free", temperature=temperature)
            # Fallback 2: Groq
            if not result:
                time.sleep(2)
                result = self.call_groq(prompt, system_prompt, max_tokens, temperature=temperature)
                
        else:
            # Default generic fallback chain
            result = self.call_groq(prompt, system_prompt, max_tokens, temperature=temperature)
            if not result:
                result = self.call_openrouter(prompt, system_prompt, max_tokens, model="nousresearch/hermes-3-llama-3.1-405b:free", temperature=temperature)
                
        return result

# Singleton instance for easy importing
ai_router = AIRouter()
