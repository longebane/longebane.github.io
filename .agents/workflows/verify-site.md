---
description: Site Verification & Deployment Readiness
---

# Verify Site Protocol

Use this skill to ensure the codebase is stable and ready for deployment.

1. **Clean Workspace**
   - Ensure all changes are committed if not currently in a development session.
     // turbo
2. **Re-install Dependencies**
   - Run `vp install` to sync with the current lockfile.
     // turbo
3. **Static Analysis & Linting**
   - Run `vp check` to verify formatting, types, and logic.
     // turbo
4. **Execution Test**
   - Run `vp test` to confirm all unit and integration tests pass.
     // turbo
5. **Production Build**
   - Run `vp build` to generate the static site and verify the build process.
     // turbo
6. **Local Preview**
   - (Optional) Run `vp preview` if manual visual inspection is required.
