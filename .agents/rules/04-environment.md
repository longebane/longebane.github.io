---
trigger: always_on
---

# Environment & Tooling Protocols

## Unified Toolchain: Vite+ (vp)

This project uses `vp`, a unified toolkit on top of Vite/Vitest/Oxlint.

### CRITICAL RULES

1. **Never use `npm`/`pnpm`/`yarn` directly.** Use `vp pm [command]` if direct access is needed.
2. **Standard Commands:**
   - `vp dev`: Starts the dev server.
   - `vp build`: Builds for production.
   - `vp test`: Runs tests (Vitest).
   - `vp check`: Runs linters and type checks.
3. **Execution:** Use `vp run [script]` to execute custom `package.json` scripts.
4. **Imports:** Import from `vite-plus` (e.g., `import { defineConfig } from 'vite-plus';`).

## Terminal Stability

- **Atomic Execution:** Run one major command at a time.
- **Pre-Flight Checks:** Run `vp check` before any major refactor or after significant changes.

## Development Lifecycle

- **Install:** Run `vp install` after pulling updates.
- **Verify:** Ensure `vp build` passes before a final push.
