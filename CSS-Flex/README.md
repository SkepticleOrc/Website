Skep Flexbox Navigation Prototype
A compact, responsive front‑end exercise that unexpectedly evolved into a fully modular navigation component. Originally intended as a simple Flexbox drill, this project transformed into a structured, theme‑driven UI system showcasing real-world CSS architecture, design token usage, and scalable layout engineering.

Built entirely from scratch using raw HTML and handcrafted CSS, this prototype avoids frameworks to reinforce a deep understanding of browser rendering, Flexbox mechanics, and variable‑driven styling.

🚀 Development Evolution (01 August 2026)
What began as a basic Flexbox test expanded into a full UI component refactor.

Introduced a clean, modular :root theme system to eliminate repeated values.

Replaced all hard-coded borders, colours, and spacing with reusable design tokens.

Standardized naming conventions across the entire stylesheet for professional readability.

Cleaned up redundant CSS and removed leftover hard-coded values inside media queries.

🛠️ Key Layout & Technical Fixes
Design Token Migration:  
Replaced scattered colours and borders with centralized CSS variables. Borders were upgraded from split values to full combined tokens (e.g., 2px solid aqua) for cleaner component styling.

Component Architecture Refactor:  
Grouped variables into themed sections: Main Nav, Flex Test 1, Flex Test 2. This mirrors modern design systems and keeps the stylesheet predictable and scalable.

Border Logic Correction:  
Fixed incorrect border ordering by ensuring variables store full border declarations. Updated components to use border: var(--token) for clean, consistent rendering.

Responsive Behaviour Cleanup:  
Refined media queries to ensure consistent layout across breakpoints. Removed leftover hard-coded colours and replaced them with variable-driven equivalents to maintain theme integrity on small screens.

Naming Convention Standardization:  
Normalized all variable names to lowercase kebab-case (--skep-test-flex1-bg-color) to align with industry standards and improve readability.

📂 Repository Directory
This project is intentionally lightweight, but structured cleanly for clarity and future expansion.

1. Main Navigation Prototype (index.html)
A simple Flexbox-driven navigation bar paired with two test containers. Demonstrates component isolation, variable-driven styling, and responsive behaviour.

2. Stylesheet (style.css)
A fully refactored CSS file featuring:

Global resets

Component-based architecture

Centralized :root design tokens

Responsive media queries

Clean naming conventions

This file represents the core learning outcome of the project.

🏆 Project Purpose & Learning Outcome
Reinforce Flexbox fundamentals through practical component building.

Practice scalable CSS architecture using design tokens and modular sections.

Improve debugging and refactoring discipline by removing repeated values and hard-coded styles.

Build confidence in responsive layout behaviour and media query structuring.

This project served as a focused, hands-on exercise in transforming simple layout code into a clean, professional UI component.

🎨 Tech Stack & Tools
Languages: Semantic HTML5, Vanilla CSS3 (Flexbox, Media Queries, CSS Variables)

Debugging & Inspecting: Google Chrome Developer Tools

Version Control: Git & GitHub

Code Formatting: Prettier (VS Code extension)

Local Development Server: Live Server (VS Code extension)

Learning Resources Used During This Build
ColorSpace — used to generate and match colour themes during the final refactor, helping refine border accents and background palettes for component styling.