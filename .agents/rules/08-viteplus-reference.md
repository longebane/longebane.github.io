---
trigger: always_on
---

# Vite+ Unified Toolchain Reference

This document serves as the always-on context for the `vp` CLI and the Vite+ development workflow.

## Overview

Vite+ (`vp`) wraps Vite, Vitest, Oxlint, and other tools into a single global interface.

## Critical Rules

1. Never use `npm`/`pnpm`/`yarn` directly. Use `vp pm`.
2. Built-in tools (`dev`, `build`, `test`, `lint`, `fmt`) take precedence over `package.json` scripts.
3. Custom scripts MUST be run with `vp run <script>`.
4. Import from `vite-plus` and `vite-plus/test`.

## Primary Commands

- `vp dev`: Development server.
- `vp build`: Production bundle.
- `vp test`: Run Vitest.
- `vp check`: Fast lint/format/type check.
- `vp install`: Install dependencies via the detected package manager.

## Troubleshooting & Pitfalls

- Do not install Vitest or Oxlint manually.
- Use `vp dlx` for one-off binaries.
- If a command hangs, check for large directory operations or recursive loops.
