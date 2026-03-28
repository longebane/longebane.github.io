# Design System & Aesthetics

## Core Aesthetics

- **Rich & Premium:** The UI should feel high-end. Use curated color palettes (HSL), deep shadows, and subtle gradients.
- **No Browser Defaults:** Use custom typography (Inter, Outfit, etc.) and refined layout spacing.
- **Dynamic Interaction:** Implement hover states, micro-animations, and smooth transitions to make the site feel "alive."

## CSS Standards

- **Vanilla CSS First:** Prefer hand-written, optimized CSS over utility frameworks.
- **Location:** All styles should reside in `src/assets/css/` or within Astro component `<style>` blocks when specific to that component.
- **Tokens:** Maintain and use CSS variables for colors, spacing, and typography to ensure consistency.

## UX Guardrails

- **Performance:** Be mindful of large assets in `public/assets/img/`. Use optimized images and lazy-loading.
- **Aesthetic Integrity:** Do not introduce "generic" UI components that clash with the established visual language.
