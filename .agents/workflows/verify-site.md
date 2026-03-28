---
description: Site Verification & Deployment Readiness
---

# Site Verification Workflow

Use this workflow to ensure the site is ready for deployment.

1. **Self-check**: Run `vp check` to verify linting and formatting.
2. **Build**: Run `vp build` to check for build-time errors.
3. **Audit**: Review large assets in `public/` for optimization.
4. **Deploy**: Confirm all CI checks pass on GitHub Actions.
