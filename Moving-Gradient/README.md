# Gradient Project – Development Notes & Learning Log

This project began as a personal exploration into CSS gradients, animation techniques, responsive behaviour, and refactoring.

It documents the full learning process — including mistakes, experimentation, optimisation, and future plans.

The goal was not perfection, but growth.

## Learning Approach

The project started with a simple idea; Learn how gradients work by experimenting, breaking things, and improving the structure later.

### Main focus

- How gradient angles behave
- How colour stops blend
- How animated gradients move
- How gradients interact with flexbox layouts
- How to structure gradient components cleanly

## External Code Usage (Honest Disclosure)

Only one piece of code was sourced from internet material; This was the base technique for creating an animated gradient background. This includeded the /*background-size*/ and /*@keyframes*/ animation pattern. Applying the animation to gradient components. Everything else — colours, layout, structure, naming, refactoring — was built manually. Copy a pattern → modify it → understand it → integrate it → refactor it.

## Typos & Cognitive Load

During the early experimentation phase, several typos appeared — especially the repeated `<hmtl>` typo. These mistakes weren't due to lack of knowledge. They were caused by cognitive load.

- Learning gradient syntax.
- Juggling colour stops.
- Testing animations.
- Adjusting layouts.
- Experimenting quickly.

All typos were corrected during the refactor phase.

## Old Code vs Refactored Code

The project originally contained duplicated values across nine gradient components; This was expected during the experimentation phase.

### Examples of Duplication

- Repeated height/width.
- Repeated border-radius.
- Repeated animation rules.
- Repeated background-size.
- Repeated flexbox properties.

## Line Count Reduction

**Original gradient code:** 97 lines (EXCLUDING SPACING)
**Refactored gradient code:** 53 lines (EXCLUDING SPACING)

This is a reduction of **44 lines**, achieved through:

- Grouping shared properties
- Isolating unique gradient colours
- Removing duplication
- Improving structure
- Increasing maintainability

### Refactor Highlights

- Shared properties grouped
- Unique gradient colours isolated
- Navigation containers cleaned
- Component architecture improved
- Code readability increased
- File size reduced
- Scalability added

Both the old code (commented out) and the refactored code are included in the CSS file to demonstrate the learning process.

---

## Design System Thinking

The refactor naturally led to a design‑system mindset.

### Planned Enhancement: Gradient Tokens

Move all gradient values into `:root` variables:

```css
:root {
  --skep-gradient1: linear-gradient(135deg, #000080, #c2b067);
  --skep-gradient2: linear-gradient(135deg, #e067a0, #5e5224);
}
```

Then

```css
.gradient-pattern1 {
  background-image: var(--skep-gradient1);
}
```

### Fixed-Shape Element Rule (learned from this project)

Any element that must maintain a fixed shape (a perfect circle, a perfect square) should:

- Set only ONE dimension (`width` OR `height`), never both
- Use `aspect-ratio` to derive the other dimension
- Add `flex-shrink: 0` if the element sits inside a flex container

This prevents shape distortion during zoom, flex-shrink, or other layout recalculations — without needing to restrict zoom accessibility.

## Responsive Behaviour (No Media Queries Required)

This project intentionally contains no media queries for layout structure, and this is by design.

All gradient components, navigation containers, and layout structures were built using:

- Flexible sizing
- Natural flexbox alignment
- Consistent spacing
- Circular components with fixed dimensions
- Simple horizontal navigation layouts

### Verified at 320px

The layout was manually tested at 320px and confirmed to:

- Align correctly
- Maintain spacing
- Preserve gradient shapes
- Avoid overflow
- Remain visually consistent

Since the design naturally adapts without breaking, media queries were not required for layout. A separate pinch-zoom shape-distortion issue was found and fixed — see below.

---

## Safari Pinch‑Zoom Behaviour & Fix

Safari iOS does not zoom the responsive layout — it zooms the rendered output like an image.

Initial testing showed gradient circles distorting into ovals specifically during pinch-zoom (not on rotation), which pointed to a layout recalculation issue rather than a rendering-engine quirk.

### Root Cause: Independent width/height calculation

The circles were sized using separate `width` and `height` properties (`50px` each). Sitting inside `display: flex` containers, they were also subject to default `flex-shrink: 1` behaviour — meaning width could compress independently of height under certain layout recalculations, breaking the 1:1 ratio and producing the oval distortion during pinch-zoom.

### The Fix: Lock shape structurally, don't disable zoom

Rather than disabling pinch-zoom via the viewport meta tag (`user-scalable=no`) — which blocks zoom for all users, including those with low vision who rely on it for accessibility — the actual fix addresses the root cause directly:

```css
.gradient-pattern1, .gradient-pattern2, .gradient-pattern3,
.gradient-pattern4, .gradient-pattern5, .gradient-pattern6,
.gradient-pattern7, .gradient-pattern8, .gradient-pattern9 {
  animation: gradient 1s ease infinite;
  background-size: 400% 400%;
  width: 50px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  border-radius: 50%;
}
```

- **`aspect-ratio: 1 / 1`** replaces the separate `height: 50px` — height is now derived from width, so the two values can never drift apart independently.
- **`flex-shrink: 0`** stops the flex container from ever compressing the circle's width to fit available space.

This locks the shape structurally rather than relying on two independently-calculated values happening to match — meaning it holds correctly through repeated zoom in/out, rotation, and resize, with no need for a page refresh to "reset" the shape.

### Viewport meta tag (accessible, zoom enabled)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Pinch-zoom remains fully enabled for all users.

## Optional CSS (Reduces Double‑Tap Zoom)

```css
html, body {
  touch-action: manipulation;
}
```

This is unrelated to the pinch-zoom skew fix above — it separately disables the double-tap-to-zoom gesture and the ~300ms tap delay some browsers apply, without affecting pinch-zoom at all.

## Future Use: Terminator Neon Borders

The animated gradient technique learned here will be directly reused in the upcoming Terminator‑themed UI project, specifically for:

- neon red Skynet borders
- glowing cybernetic outlines
- machine‑vision HUD panels
- scanning overlays
- robotic interface highlights

This gradient animation method is ideal for creating:

- pulsing neon borders
- glowing edges
- animated cybernetic frames
- Terminator‑style UI components

This gradient project acts as the foundation for the Terminator design system.

## Summary

This project demonstrates:

- real learning
- experimentation
- mistakes
- corrections
- refactoring
- architectural thinking
- responsive design awareness
- mobile behaviour handling
- design‑system planning
- future project integration

It started messy (as all learning projects do), but evolved into a clean, scalable CSS system that will be reused in future themed UI builds.