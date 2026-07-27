# SkepticleOrc Developer Portfolio  

An authentic, responsive developer portfolio tracking my self-taught software engineering journey and my academic progress through the **Open University Q62 Computing & IT degree (Software Route)** starting October 2026.

This project is built from scratch using raw HTML and custom CSS, completely avoiding templates or frameworks to ensure a total understanding of core browser rendering mechanics and fluid responsive layouts.

## 🚀 Recent Architecture Upgrades (27 July 2026 - 03 August 2026)
* Major structural overhaul squashing lingering layout bugs.
* Expand the directory with clean, modular pages. 
* Removed several lines of unwanted HTML and CSS: This was achieved by removing unwanted div tags and adding the class directly into the element. Cleaned up around 10 lines of HTML and 15 lines of CSS.


### 🛠️ Key Layout & Technical Fixes
* **Navigation Flow Migration:** Shifted the main navigation bar from `position: fixed` to `position: relative` to bring it back into the vertical Flexbox stack. This resolved the 601px–1120px whitespace gap where the background image layout was clipping.

* **Component Positioning:** Isolated the website logo and the Dark Mode toggle using `position: absolute` within the parent header layout to keep them pinned flawlessly across screen resizes.

* **Desktop Layout Correction:** Kept the desktop `nav` at `position: relative`, ensuring it remains in normal document flow. This resolved an issue where the Wallpaper image was rendering underneath the nav bar, since content now automatically pushes below the nav rather than needing manual offsets.

* **Mobile Navigation Fix:** Shifted the mobile `nav` from `position: relative` to `position: fixed` (with `top: 0; left: 0;`), keeping the black nav bar visible and pinned in place while scrolling instead of disappearing off-screen. Added matching `padding-top` to `main` to stop content rendering underneath the now-fixed bar.

* **Menu Overlap Fix:** Diagnosed a redundant `margin-top: 60px` on the mobile dropdown menu (`.navi ul`), left over from before the header reserved its own fixed height. Set it to `0`, resolving an unwanted whitespace gap that only appeared when the mobile menu was open.

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
* **W3 Schools** - https://www.w3schools.com/ Used for HTML, CSS, & Javascript.
* **CSS Tricks** - https://css-tricks.com/ Used to help with design layouts.
* **MDN** - https://developer.mozilla.org/en-US/ Used as a Main developer hub.
* **MJS** - https://javascript.info/ Used for Modern Javascrtipt concepts.
* **Caniuse** - https://caniuse.com/ Used to check what elements work in which browsers.
* **Claude AI** - https://claude.ai/ Used to help code and debug css currrently but wil use with Javascript eventually. 
* **ColorSpace** - https://mycolor.space/ Used to color match themes and website styles. 