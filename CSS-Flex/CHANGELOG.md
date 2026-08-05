# Changelog

All notable changes to this project are documented in this file.

## [04/08/2026]

### CSS

- **Nav Background Color:** Changed from cyan to black.
- **Nav Border:** Added `2px solid grey` to `border-bottom`.

### HTML

- **Back Button Logo:** Replaced the black back-button logo with a white arrow icon, since the original was no longer visible against the newly changed black nav background.
- **Flexbox Sample Links:** Updated the CSS flexbox sample links to point to the main site's homepage, About, and Contact pages.

## [01/08/2026]

What began as a basic Flexbox test expanded into a full UI component refactor.

- Introduced a clean, modular `:root` theme system to eliminate repeated values.
- Replaced all hard-coded borders, colours, and spacing with reusable design tokens.
- Standardized naming conventions across the entire stylesheet for professional readability.
- Cleaned up redundant CSS and removed leftover hard-coded values inside media queries.

### Key Layout & Technical Fixes

- **Design Token Migration:** Replaced scattered colours and borders with centralized CSS variables. Borders were upgraded from split values to full combined tokens (e.g., `2px solid aqua`) for cleaner component styling.

- **Component Architecture Refactor:** Grouped variables into themed sections: Main Nav, Flex Test 1, Flex Test 2. This mirrors modern design systems and keeps the stylesheet predictable and scalable.

- **Border Logic Correction:** Fixed incorrect border ordering by ensuring variables store full border declarations. Updated components to use `border: var(--token)` for clean, consistent rendering.

- **Responsive Behaviour Cleanup:** Refined media queries to ensure consistent layout across breakpoints. Removed leftover hard-coded colours and replaced them with variable-driven equivalents to maintain theme integrity on small screens.

- **Naming Convention Standardization:** Normalized all variable names to lowercase kebab-case (`--skep-test-flex1-bg-color`) to align with industry standards and improve readability.