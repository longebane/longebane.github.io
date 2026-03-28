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

## Terminal Stability & Safety

- **Direct File Verification**: To prevent terminal hangups (especially with filenames containing spaces or special characters), always use `view_file` to directly inspect logs or status files instead of shell-based `grep` or `tail`.
- **Atomic Command Execution (Critical)**: **NEVER** use `&&` or `;` to chain multi-step terminal commands. Execute each action as a discrete, standalone tool call to ensure stable terminal polling and bypass shell-escaping race conditions.
- **Forced Async Git (Stability)**: ALWAYS execute `git add`, `git commit`, and `git push` as separate, standalone tool calls. If a command handles a large volume of files, you MUST check its status via `command_status` before proceeding to ensure the terminal has not stalled.
- **Thought-Cycle Decisiveness (Stability Rule 03)**: If a reasoning turn contains more than 3 repetitive planning loops (e.g., "Wait, I'll do it now"), you **MUST** abort the thought cycle and immediately execute the next logical tool call to restore operational momentum.
- **Pre-Flight Checks**: Run `vp check` before any major refactor or after significant changes.
- **Recursive Command Safety:** Never run `ls -R` or deep `find` commands from the repository root or on large directories (e.g., `node_modules`). This prevents terminal hangs.
- **Loop Prevention:** If you detect a recursive thought or planning loop, STOP and execute the first logical tool call. Decisive action is preferred over redundant planning.
- **Command Avoidance:** If a command (like `mkdir`, `mv`, or `rm`) hangs or is cancelled, switch to using direct filesystem tools like `write_to_file` to initialize directories indirectly. **NEVER** attempt a recursive `rm -rf` via `run_command` if the terminal has already shown signs of instability. This is especially critical in WSL environments where large file operations under `run_command` can trigger significant latency.
- **Emergency Protocol (/fix):** If you become hung up or stuck in a loop, you MUST follow the `/fix` protocol in `.agents/workflows/fix.md` to reset the session state, terminate the hang, and document the specific failure.

## Development Lifecycle

- **Install:** Run `vp install` after pulling updates.
- **Verify:** Ensure `vp build` passes before a final push.
