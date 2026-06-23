# Project Agent Rules

- **Zero-Tolerance for Email Errors**: Any scripts, workflows, or templates related to email generation or delivery must be meticulously verified for completeness, correct environment variable alignment (e.g., API keys matching between GitHub Actions and scripts), and lack of placeholder/dry-run outputs before deployment. Emails go directly to users, and errors create a lasting negative impression. Always perform end-to-end alignment checks before modifying email-related logic.
