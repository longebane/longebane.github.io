---
trigger: always_on
---

# Tech Stack & Standards

## Framework: Astro

- Use Astro components for templating.
- Leverage Astro's server-side logic and static generation features.

## Toolchain: Vite+ (vp)

- **Primary Tool:** Always use `vp` for running dev servers, building, testing, and linting.
- **Command Source:** Refer to `.agents/rules/04-environment.md` for specific `vp` rules.

## Deployment: GitHub Pages

- **Workflow:** Deployed via `.github/workflows/deploy.yml`.
- **Validation:** Always verify builds locally with `vp build` before pushing changes.

## Performance Requirements

- Optimized image handling for assets in `public/`.
- Minimal JS footprint where possible.
