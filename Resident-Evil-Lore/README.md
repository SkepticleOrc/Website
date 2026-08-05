# Umbrella Terminal Dashboard (Resident Evil Mini-Project)

An immersive, responsive single-page web application replicating an in-universe Umbrella Corporation terminal dashboard. This project acts as an isolated frontend sandbox displaying high-containment biological virus strains and organic weapon classifications (monsters) across three canonical facilities: **ARK**, **NEST**, and **THE HIVE**.

This project's layout architecture is built entirely from scratch utilizing semantic HTML5 markup and raw CSS3. It intentionally avoids third-party design frameworks, pre-made templates, or utility scripts to ensure a total, honest grasp of core browser rendering mechanics and fluid responsive styling.

## Transparency, Architecture, & AI Disclosure

- **HTML & CSS Mastery:** Every line of structural HTML markup and the entire refactored CSS style system was engineered, structured, and optimized completely by hand to master box-modeling and the CSS cascade down to a strict 320px minimum screen width.

- **JavaScript Status:** The interactive script functionality (`script.js`) powering the dynamic data modal is **not yet fully understood**. To complete the interactive frontend vision for this project, the raw JavaScript event parameters were generated using an AI collaborator (Claude AI).

- **Future Learning Roadmap:** Once I have established a completely flawless, instinctual handle on HTML semantic layouts and advanced CSS responsive mechanics, I will immediately shift 100% of my development focus toward mastering core Vanilla JavaScript fundamentals from the ground up to lighten the mental cognitive load.

---

## Architecture Overview (as of 30 July 2026)

- Completed a structural CSS refactoring sweep, reducing the total file length from **402 lines to a highly optimized 287 lines** by isolating shared component layout blueprints in a safe sandbox file before deployment.

- Implemented an isolated subfolder repository architecture, launching the terminal cleanly as an independent mini-app from the main portfolio index without merging codebases or risking global stylesheet leakage.

- Removed dozens of lines of redundant CSS by establishing a universal browser reset block at the top of the stylesheet, eliminating repetitive `margin: 0;` and `padding: 0;` override strings across individual components.

### Key Layout & Technical Decisions

- **Global Spacing Reset:** Implemented the universal `*`, `*::before`, `*::after` reset rule forcing all default browser margins and paddings to a clean slate. This eliminated unexpected, hidden layout spacing across varying web browsers.

- **Mobile Viewport Optimization:** Applied global `box-sizing: border-box` architecture across the stylesheet. This corrected a critical layout break on small mobile viewports, forcing internal container padding to absorb inward and securing reliable rendering down to a 320px minimum screen width.

- **Modular Navigation Links:** Wired the dashboard's return trigger back to the primary system index using relative directory pathing (`../index.html`). This cleanly steps the browser out of the isolated subfolder and back into the root portfolio area without breaking server links.

- **Fluid Proportional Sizing:** Removed rigid pixel height constraints on the primary interface grid and deployed `aspect-ratio: 1 / 1`. This allowed the card elements to expand fully across desktop monitor viewports while maintaining uniform square parameters.

- **Branded Selector Synchronization:** Refactored the core modal visibility state engine to toggle explicitly between custom branded classes (`.skep-modal-hidden` and `.skep-modal-active`), resolving an operational crash where invalid default class references locked up DOM event listeners.

---

## Terminal Interface Directory

The mini-project's structural layers are strictly isolated within this local folder to ensure quick rendering speeds and clean organization.

### 1. Terminal Dashboard Hub (`index.html`)

The central user interface featuring high-contrast glowing red borders, responsive image card buttons, custom branded navigation markers (`skep-link-ark`, `skep-link-nest`, `skep-link-hive`), and hidden structural elements reserved for event-driven scripting.

### 2. Isolated Terminal Styles (`style.css`)

The complete visual framework governing the gritty, dark survival-horror aesthetic. It handles typography, grid layouts, card boundaries, and responsive media rules independently from the main portfolio theme.

---

## Current Functional & Scripting Strategy

- **Target:** To wire up interactive click triggers that feed data dynamically into a singular, lightweight container box.

- **Method:** Utilize basic, foundational Vanilla JavaScript selectors (`document.getElementById` and `document.querySelector`) to intercept naked link interactions (`href="#"`) and dynamically swap CSS visibility classes (`skep-modal-hidden` to `skep-modal-active`). This approach provides an honest, clear demonstration of DOM manipulation concepts without reliance on complex abstract frameworks.

- **Lore Immersion:** Turn custom-branded navigation slots (**ARK**, **NEST**, and **THE HIVE**) and 9 high-containment asset classes into interactive security alert overlays. This keeps the single-page layout fully contained, eliminates dead links, and adds distinct personality to the portfolio presentation.

---

## Tech Stack & Tools

- **Languages:** Semantic HTML5, Vanilla CSS3 (Custom Branding Selectors, Flexbox Layouts), Modern JavaScript (DOM Event Listeners)
- **Debugging & Inspecting:** Google Chrome Developer Tools (Mobile Responsive Emulation down to 320px)
- **Version Control:** Git & GitHub Pages subfolder deployment pipeline
- **[W3Schools](https://w3schools.com)** - Used for HTML, CSS, & JavaScript.
- **[CSS Tricks](https://css-tricks.com)** - Used to help with design layouts.
- **[MDN](https://mozilla.org)** - Used as a main developer hub.
- **[javascript.info](https://javascript.info)** - Used for modern JavaScript concepts.
- **[Caniuse](https://caniuse.com)** - Used to check what elements work in which browsers.
- **[Claude AI](https://claude.ai)** - Used to help code and debug CSS currently, will use with JavaScript eventually.
- **[ColorSpace](https://mycolor.space)** - Used to color match themes and website styles.
- **Code Formatting:** Prettier (VS Code extension), configured via `.prettierrc` for consistent style across the project.
- **Local Development Server:** Live Server (VS Code extension), providing instant auto-refresh on save for faster local testing.