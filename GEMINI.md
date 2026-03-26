# Project Context: longebane.github.io

This is a personal portfolio and hobbyist website built with **Astro**. It features a mix of modern web components and legacy assets, including a GameMaker HTML5 game ("Twelve").

## Tech Stack
- **Framework:** Astro
- **Styling:** Vanilla CSS (located in `src/assets/css/`)
- **Deployment:** GitHub Pages (via `.github/workflows/deploy.yml`)
- **Components:** Astro components (`src/components/`)
- **Layouts:** `src/layouts/BaseLayout.astro`

## Project Structure Highlights
- `src/pages/`: Contains the main routes (`index.astro`, `portfolio.astro`).
- `public/assets/img/`: A large collection of legacy images and icons.
- `twelve/`: Contains the GameMaker "Twelve" HTML5 game build.
- `src/assets/css/index.css`: The primary stylesheet.

## Guiding Principles
- **Maintain Aesthetic:** Adhere to the established personal/hobbyist visual style.
- **Vanilla First:** Prefer Vanilla CSS over utility frameworks or CSS-in-JS.
- **Performance:** Be mindful of the large image assets in `public/`. Use Astro's optimization features where appropriate.
- **Legacy Preservation:** Ensure that changes to the Astro site do not break the standalone HTML/JS game in the `twelve/` directory.

## TODO
- **Implement Scroll-based TOC Highlighting**: The scroll-based highlighting for the Table of Contents in `src/components/TableOfContents.astro` was removed due to persistent issues with accurately detecting the active section during scrolling. The logic struggled with inconsistent `offsetTop` and `offsetHeight` values, leading to incorrect or no highlighting. This feature needs further investigation to reliably determine the visible section and apply the `active` class dynamically.
