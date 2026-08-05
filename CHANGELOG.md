# Changelog

All notable changes to this project are documented in this file.

> **Note:** Formal changelog tracking began 24/07/2026. Earlier development, from the site's inception through late July 2026, predates this log and is not individually recorded here.

## [24/07/2026 - 03/08/2026]

### HTML

**Wallpaper System Migration**

- Replaced `<img class="Wallpaper">` with `<div class="skep-Wallpaper"></div>`.
- Introduced `.skep-wallpaper-container` hero structure.
- Removed ~10 lines of redundant HTML wrappers.
- Added centered overlay elements: `.skep-banner` and `.skep-h1`.

**Logo Class Renaming**

- Updated `.logo` → `.skep-logo` for naming consistency.

**Navigation Cleanup**

- Removed unnecessary wrapper `<div>` elements.
- Cleaned up `<nav>` structure and link lists.
- Updated directory links (e.g., `designs.html` → `practice.html`).

**Direct Class Assignment**

- Removed redundant `<div>` wrappers by applying classes directly to elements.

**Directory Expansion**

- Added new pages: `component-lab.html`, `study-log.html`, `privacy.html`.

### CSS

**Wallpaper Component Overhaul**

- Removed legacy `.Wallpaper` image rules.
- Added new hero component CSS:
  - `.skep-wallpaper-container`
  - `.skep-Wallpaper`
  - `.skep-banner`
  - `.skep-h1`

**Height Logic Correction**

- Replaced `height: 100%` with `height: 100vh` for full-screen hero behaviour.

**Width Simplification**

- Removed redundant `width: 100%` from block-level containers.

**Removal of All `!important` Rules**

- Layout now behaves naturally without forced overrides.

**Root Variables Introduced**

- `:root { --skep-border: 2px solid gray; }`

**Navigation Bar Improvements**

- Desktop nav remains in normal flow (`position: relative`).
- Mobile nav now uses `position: fixed` with proper padding offsets.
- Removed leftover `margin-top` from mobile dropdown.

**Logo & Dark Mode Button Positioning**

- Both now use `position: absolute` inside the header for consistent placement.

**Footer Border Upgrade**

- Footer now uses `border-top: var(--skep-border)`.

**Mobile Layout Fixes**

- Cleaned spacing and padding.
- Fixed overlay stacking (z-index upgrades).
- Ensured hero section renders correctly under fixed nav.

**Wallpaper Component**

- Background layer uses `inset: 0` instead of four separate positioning rules.
- Z-index layering:
  - Wallpaper: 0
  - Banner: 1
  - Title: 2
- Removed redundant width definitions.

**Legacy CSS Removal**

- Removed ~15 lines of outdated CSS.

### JavaScript

**Mobile Menu State Management**

- Improved JS toggle logic for mobile menu overlay.
- Ensures menu opens and closes cleanly without leftover spacing.

**Dark Mode Toggle Stability**

- JS now interacts correctly with the repositioned `.skep-logo` and `.dark-mode-btn`.
- No more layout jumps when toggling themes.

**Navigation Behaviour**

- JS now respects the fixed mobile nav height.
- Prevents content from sliding underneath the bar.

**Component Lab Integration**

- JS prepared for isolated UI components (sliders, modals, toggles).
- Ensures each component behaves independently without global conflicts.

### Summary

- Wallpaper system replaced
- HTML structure cleaned
- Redundant wrappers removed
- `!important` removed
- Width rules simplified
- Height logic corrected
- Mobile nav fixed
- Hero component added
- Root variables added
- Footer cleaned
- Navigation improved
- Responsiveness improved
- Legacy CSS removed
- Z-index layering corrected
- Modern shorthand adopted
- Code weight reduced
- Maintainability improved
- Readability improved
- Scalability improved
- JS menu logic stabilised
- JS dark mode behaviour improved
- JS component lab prepared
