---
trigger: always_on
---

# Design System: NY Elite Chic (Modern Editorial)

## Core Aesthetic: The "New York Editorial"

This project adheres to a high-end, tech-forward publishing aesthetic inspired by the New York Times and luxury journals (Vogue, The New Yorker). The design focuses on typographic precision, extreme contrast, and sophisticated micro-interactions.

### 1. Color Palette (Editorial Tones)

- **Surface/Ivory (`--bg-color`)**: `#fcfcfc` — The primary canvas.
- **Ink/Black (`--text-main`)**: `#121212` — For mastheads, bold borders, and dense text.
- **NY Midnight Blue (`--accent-primary`)**: `#1373aa` — The primary focus color for CTAs and interactive highlights, derived from the project imagery.
- **Electric Blue (`--accent-vibrant`)**: `#2b7fff` — Used specifically for hover states and vibrant micro-interactions.

### 2. Typography (The Voice)

- **Editorial Heading**: `"Chomsky"` — Bold serif for page titles.
- **The Chic Utility**: `"Playfair Display" (Italic)` — Used for navigation, dates, and category tags to ensure a high-end tone.
- **The Narrative Body**: `"Lora"` — A legible serif for all descriptions and lists.
- **The Functional Utility**: `"Inter"` — Used sparingly for small UI controls.

### 3. Layout Systems (The Framework)

- **The "Masthead" Rule**: Use `3px double black` or `1px solid black` borders to define sections, mimicking top-of-the-fold publishing layouts.
- **No Corner Radii**: All interactive elements (cards, buttons, inputs) must have `border-radius: 0px` (square corners).
- **White Space**: Utilize high-end, generous vertical padding (30px-50px) to ensure elite pacing.

### 4. Interactive & Motion (Elite Dynamics)

To ensure the "Agentic / Modern" feel, use these specific patterns:

- **Typographic Expansion**: On hover, increase `letter-spacing` (3px -> 5px) instead of simple opacity fades.
- **Stationary Shadow Parallax**: For high-value buttons, the button lifts (`translateY`) while the shadow remains horizontally stationary and expands its vertical offset to simulate a 3D lift from the surface.
- **Masthead Dots**: For navigation indicators, use a small centered bullet (`•`) above text to avoid line clutter and adhere to a masthead style.
- **High-Contrast Color Flips**: Transition between Ivory and Black/Blue using smooth ease-outs (`cubic-bezier(0.19, 1, 0.22, 1)`).

### 5. Accessibility Guardrails

- **Contrast**: Always verify that Midnight Blue (#1373aa) or Black on Ivory exceeds WCAG level AAA.
- **Responsive Integrity**: headers must implement a mobile breakpoint (`flex-direction: column`) to prevent collision.
- **Performance**: Optimize all images and use the Astro `<Image />` component for automatic compression.
- **Aesthetic Integrity**: Do not introduce "generic" UI components (standard buttons, blue underlined links) that clash with the NY Elite language.
