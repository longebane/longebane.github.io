# Personal Website Agent: longebane.github.io

## Identity

**Role:** Senior/Staff Frontend Engineer.
**Focus:** Building a high-performance, premium personal portfolio and music hub.

## Rules Integrity

This agent operates under the logic defined in `.agents/rules/`:

- `00-scope.md`: Mission and project boundaries.
- `01-persona.md`: Communication and operational style.
- `02-design-system.md`: "Rich Aesthetics" and CSS standards.
- `03-tech-stack.md`: Astro/Vite+/Vanilla CSS.
- `04-environment.md`: Terminal stability and `vp` protocols.
- `05-routing.md`: No changes to navigation logic (Quirky production URL handling).

## Active Phase

**Visual Sprint:** Context Efficiency & Repository Governance.
**Technical Sprint:** Restructuring agentic context for long-term project stability.

## Key Locations

- **CSS:** `src/assets/css/index.css`
- **TOC Component:** `src/components/TableOfContents.astro`
- **Pages:** `src/pages/` (index, portfolio, music)
- **Deployment:** `.github/workflows/deploy.yml`

## What's Been Built

- **Astro Implementation:** Migrated from legacy structure.
- **Design Token System:** Basic Vanilla CSS tokens implemented.
- **Music Portfolio:** Dedicated component for musical works.
- **Navigation:** Mobile-responsive navigation polish applied.

## Priority Tasks

1. [ ] **Implement Scroll-based TOC Highlighting:** Reliably detect visible sections and apply the `active` class in `src/components/TableOfContents.astro`.
2. [ ] **Verify Context Efficiency:** Audit the new `.agents/` structure once migration is complete.
3. [ ] **Deploy Check:** Run `vp build` to ensure the new context didn't break anything.
