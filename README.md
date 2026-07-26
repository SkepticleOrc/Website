# SkepticleOrc Developer Portfolio

An authentic, responsive developer portfolio tracking my self-taught software engineering journey and my academic progress through the **Open University Q62 Computing & IT degree (Software Route)** starting October 2026.

This project is built from scratch using raw HTML and custom CSS, completely avoiding templates or frameworks to ensure a total understanding of core browser rendering mechanics and fluid responsive layouts.

## 🚀 Recent Architecture Upgrades (26 July 2026)

Today, I executed a major structural overhaul to squash lingering layout bugs, protect personal data privacy, and expand the directory with clean, modular pages.

### 🛠️ Key Layout & Technical Fixes
* **Navigation Flow Migration:** Shifted the main navigation bar from `position: fixed` to `position: relative` to bring it back into the vertical Flexbox stack. This permanently eliminated the 601px–1120px whitespace gap where the background image layout was clipping.
* **Component Positioning:** Isolated the website logo and the Dark Mode toggle using `position: absolute` within the parent header layout to keep them pinned flawlessly across screen resizes.
* **Responsive Card Justification:** Created the `.origins-content` wrapper for main text content, restricting it to a maximum reading width of `750px` on desktop, scaling to `650px` on tablets, and dropping limits on mobile. Implemented `text-align: justify` combined with mobile-safe `text-justify: inter-word` to ensure crisp, clean layout edges on small touchscreens.
* **Menu Architecture Clean-up:** Ripped out legacy placeholder sections ("Learn" and "Practice") from the mobile layout overlay. Replaced them with professional, distinct tracking columns.

---

## 📂 Repository Directory

The application structure has been modularized into separate, dedicated files to keep codebases manageable, easy to navigate, and clean for version control updates.

### 1. Index / Navigation Hub (`index.html`)
The main gateway of the site utilizing an animated mobile menu overlay and custom JavaScript state management to toggle fluid dark mode themes.

### 2. About Me / SkepticleOrc Origins (`about.html`)
A deeply personal, honest narrative bridging my background in high-pressure public services (Security and Prison Services) to my lifelong 19-year curiosity for digital building. It details my evolution from writing basic text layouts in Windows Notepad at age 16, to modding video games, and launching a live project on Roblox.

### 3. Component Lab (`component-lab.html`) *[NEW]*
A dedicated interface sandbox showcasing independent UI engineering components built from scratch (such as mobile menu toggles, layout sliders, or standalone modal boxes). It isolates my daily practice pieces from full-scale projects.

### 4. Study Log (`study-log.html`) *[NEW]*
An interactive chronological archive built natively using HTML `<details>` and `<summary>` components. This file tracks my self-taught frontend breakthroughs over the summer and will serve as my primary lecture and puzzle notes log for upcoming Stage 2 modules like **Object-Oriented Java (M250)** and **Algorithms (M269)**.

### 5. Privacy Policy (`privacy.html`) *[NEW]*
A defensive data page detailing my commitment to web safety. This website deliberately implements zero analytical trackers and relies on invisible third-party form endpoints to process communication, keeping personal contact emails 100% hidden from automated database scrapers.

---

## 🏆 Current Academic & Career Strategy
* **Target:** To work relentlessly through the Open University curriculum to achieve a **First-Class Honours degree (1st)**.
* **Method:** Capitalize on the lower grade-pressure of Stage 1 modules to build deep side-projects under the **SkepticleOrc** studio banner, ensuring a massive practical headstart before Stage 2 and Stage 3 scaling algorithms kick in.

---

## 🎨 Tech Stack & Tools
* **Languages:** Semantic HTML5, Vanilla CSS3 (Custom Media Queries, Flexbox), Basic JavaScript State Management
* **Debugging & Inspecting:** Google Chrome Developer Tools
* **Version Control:** Git & GitHub Pages deployment pipeline
