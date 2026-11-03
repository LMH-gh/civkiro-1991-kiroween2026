# NecroSpec Studio (亡灵规格工坊) — Kiroween 2026 Entry

> **Track**: **Skeleton Crew** (Primary) | **Costume Contest** & **Frankenstein** (Secondary)  
> **Built with**: [Kiro AI IDE](https://kiro.dev) (`/.kiro/specs`, `/.kiro/steering`, `/.kiro/hooks`, `/.kiro/settings/mcp.json`)  
> **License**: MIT Open Source License

## 🎃 What is NecroSpec Studio?
**NecroSpec Studio** is an interactive **Spec-Driven Development (SDD) Workbench & Skeleton Crew Starter Template** designed for [Kiroween 2026](https://kiroween.devpost.com/). It helps developers resurrect messy ideas or legacy code into strictly validated `.kiro` specifications, governance steering files, automated `PostFileSave` hooks, and Property-Based Testing (PBT) invariants.

## 🔑 Judge Test Credentials (Live Demo)
Open `index.html` in any browser (or visit your deployed GitHub Pages / Vercel URL) and click **Judge Instant Login**, or use:
- **Judge Email**: `judge@kiroween.dev`
- **Access Code**: `Kiroween2026!`

## 🗂️ Included `/.kiro` Architecture
- **`.kiro/steering/`**: `product.md`, `tech.md`, `structure.md`, `AGENTS.md`
- **`.kiro/specs/necrospec-core/`**: `requirements.md` (EARS syntax), `design.md`, `tasks.md`
- **`.kiro/hooks/`**: `test-on-save.json` (`PostFileSave` PBT runner), `kiro-spec-lint.json`
- **`.kiro/settings/mcp.json`**: Filesystem & Playwright MCP configuration
- **`docs/KIRO_USAGE.md`**: Detailed breakdown of how Kiro features powered this build

## 🚀 Quick Start & Deployment
1. Unzip or clone this repository and push to a **Public** GitHub repository (note: `.gitignore` explicitly keeps `/.kiro/` tracked!).
2. Enable **GitHub Pages** on the root branch (`main` -> `/ (root)`) to publish `index.html` as your Live Demo URL.
3. Run the Property-Based Testing suite locally:
   ```bash
   node tests/pbt_spec_invariants.test.js
   ```
