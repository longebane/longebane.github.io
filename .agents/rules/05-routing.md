# Routing Integrirty & Quirks

## Navigation Routing

- **Rule:** Do not modify the routing logic in `src/layouts/BaseLayout.astro`.
- **Logic:** The selection logic for the navigation links must strictly adhere to the following implementation:
  - Music Portfolio: `<li class={Astro.url.pathname === "/" ? "selected" : ""}>`
  - Web Portfolio: `<li class={Astro.url.pathname === "/" ? "" : "selected"}>`
- **Reason:** This specific logic is required to handle quirky URL parameters and path structures in the production environment (e.g., GitHub Pages) where checking for a strict `/portfolio` path may fail.
