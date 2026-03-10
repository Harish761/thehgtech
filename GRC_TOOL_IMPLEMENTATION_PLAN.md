# TheHGTech GRC Readiness Engine: Implementation Plan

## 1. Legal & Copyright Strategy (Zero Liability)
**Challenge:** ISO/IEC 27001:2022 is strictly copyrighted by the International Organization for Standardization. Copying their exact control text, descriptions, or official implementation guidance is a direct copyright violation.
**Solution:** We will build the engine using a "Clean Room" approach.
*   **The Mapped Approach:** We will map to the *concepts* of the 93 controls (which cannot be copyrighted), but we will write 100% original auditor questions and evidence requirements.
*   **Disclaimer:** The tool will include a clear legal disclaimer: *"This tool is an independent readiness assessment designed to align with international security best practices, including concepts from ISO/IEC 27001:2022. It is not affiliated with, endorsed by, or a substitute for official ISO certification or documentation."*
*   **Result:** 100% legally safe, while delivering the exact same business value to the user.

## 2. UI/UX Architecture (Enterprise SaaS Grade)
*   **Aesthetic:** Dark mode (`#0a0a0a`), heavy use of CSS glassmorphism (frosted glass panels with `backdrop-filter: blur`), subtle gradients.
*   **Interactions:** Micro-animations for every button press. When transitioning between questions, smooth fade-ins and slide-ups.
*   **Progress Tracking:** Distinctive, glowing progress bars split into 4 macro-domains (Organizational, People, Physical, Technological).
*   **Navigation:** A "floating" bottom command bar for mobile, and a sleek sidebar map for desktop users to easily jump between controls.

## 3. Technical Stack (Local-First)
*   **Frontend:** Vanilla JavaScript (ES6+), optimized to act like a Single Page Application (SPA) without the bloat of React.
*   **Styling:** Custom Vanilla CSS utilizing CSS Variables for precise theming.
*   **Data Layer:** `window.localStorage`. The user's assessment state is constantly serialized to JSON and saved locally.
*   **Output Engine:** `SheetJS` (for Excel SoA generation) and `Chart.js` (for dashboard metrics).

## 4. Phased Roadmap
*   **Phase 1: Knowledge Base Construction:** Writing the 93 original control questions and the JSON schema.
*   **Phase 2: Core Engine & Routing:** Building the JS logic that reads the JSON, renders the questions, and handles the "Yes/No/Partial" state saving.
*   **Phase 3: The Dashboard:** Building the final results page with dynamic graphs and scoring.
*   **Phase 4: Export & Polish:** Implementing the Excel export, adding micro-animations, and finalizing mobile responsiveness.
