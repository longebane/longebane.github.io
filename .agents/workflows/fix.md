---
description: Emergency protocol for technical hangs or thought loops.
---

# Workflow: Fix

**Trigger Phrase**: `/fix`

When this command is invoked, the agent MUST:

1. **Immediate Execution**: Abort all secondary planning. The agent MUST move directly to forensic analysis and execution.
2. **Forensic Audit**: Identify the root cause of the failure: Reasoning Loop, Terminal Hang-up, or **Rule Violation**.
3. **Logic Hardening (Rule Update)**: If a rule was violated, **FIRST** update the relevant rule in `.agents/rules/` to explicitly and permanently block the observed failure mode.
4. **Behavioral Validation**: Test the hardened rule against the _old, rule-breaking text_ to ensure it captures the violation. Fail the turn if the new rule doesn't catch it.
5. **Corrective Output**: Apply the surgical fix/rewrite to the original artifact, ensuring it fully adheres to the now-hardened ruleset.
6. **Log Fix**: Note the precise failure, rule update, and corrective action in `reference/logs/current-session.md`.
7. **Git Sync**: Commit and push all changes using the **Atomic Sync Protocol**. // turbo
