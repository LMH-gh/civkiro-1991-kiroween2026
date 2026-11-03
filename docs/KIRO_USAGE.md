# How We Used Kiro to Build NecroSpec Studio (Kiroween 2026)

## 1. Spec-Driven Development (`.kiro/specs/necrospec-core/`)
Instead of vibe-coding from unstructured prompts, we started by authoring `.kiro/specs/necrospec-core/requirements.md` using **EARS (Easy Approach to Requirements Syntax)** (`WHEN <trigger> THE SYSTEM SHALL <response>`). Kiro translated those five core requirements into a deterministic component architecture in `design.md` and an 8-milestone implementation plan in `tasks.md`.

## 2. Project Governance via Steering (`.kiro/steering/`)
We configured four always-on steering documents:
- `product.md`: Locked in our **Skeleton Crew** primary category focus and core personas.
- `tech.md`: Enforced zero-backend browser portability, safe `localStorage` handling, and accessibility rules.
- `structure.md`: Guaranteed that `/.kiro` remains tracked at the repository root and never excluded by `.gitignore`.
- `AGENTS.md`: Defined specialized roles for `SpecNecromancerAgent` and `HookSentinelAgent`.

## 3. Event-Driven Automation Hooks (`.kiro/hooks/`)
We built two Kiro hooks in `.kiro/hooks/`:
- `test-on-save.json`: Triggers on `PostFileSave` across source and spec files to execute our 100-case Property-Based Testing suite (`tests/pbt_spec_invariants.test.js`), verifying EARS grammar completeness and compiler idempotency.
- `kiro-spec-lint.json`: Automatically audits changes to `requirements.md` against `product.md`.

## 4. MCP Integration (`.kiro/settings/mcp.json`)
We wired `@modelcontextprotocol/server-filesystem` and `@playwright/mcp` so Kiro agents can inspect `.kiro` artifacts and verify the live web application state automatically.
