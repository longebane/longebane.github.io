---
description: Emergency protocol for technical hangs or thought loops.
---

# Emergency Fix Protocol (/fix)

This workflow is triggered when the agent hangs, loops, or fails to execute a command repeatedly.

## Diagnosis

1. Identify the stalling tool (e.g., `run_command` with recursive flags or large data).
2. Check for recursive planning patterns (repeating the same logic without tool calls).

## Action

1. **Kill Hanging Processes**: Use `send_command_input` with `Terminate: true` on the offending CommandId.
2. **Atomic Reset**: Abandon complex `run_command` operations. Use `write_to_file` and `view_file` for all file operations.
3. **Log the Failure**: Immediately update `.agents/rules/04-environment.md` with the new specific failure mode and its preventive rule.
4. **Decisive Continuation**: Execute the next logical task step using the simplest possible tool.

// turbo-all

## Execution

1. Update Environment Rule.
2. Terminate the hang.
3. Resume with atomic tools.
