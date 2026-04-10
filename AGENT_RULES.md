# Agent Rules — jasd.com Portfolio

This file governs how the autonomous agent updates this portfolio. Read this before making any change. Never modify this file.

---

## Source of Truth

The portfolio content lives in `/content/`. The agent reads from:
- `~/my-vault/brain/North Star.md` — current focus, active projects
- `~/.claude/projects/-Users-jasd/memory/` — project status, metrics, decisions
- `~/my-vault/brain/Key Decisions.md` — strategic decisions
- Direct input from Jasper in session

---

## What the Agent CAN Update

### `/content/projects.json`
- `status` — change between `"live"`, `"review"`, `"building"` as project stage changes
- `statusLabel` — the human label for the status (e.g., "Live", "App Store Review", "Beta")
- `metrics` — update with real numbers when Jasper shares them (MRR, downloads, users, etc.)
- `links` — add real URLs when they become available (App Store link, site URL, demo URL)
- Add new projects when Jasper starts building something new (minimum: slug, name, subtitle, status, tagline, description, stack, order)

### `/content/about.json`
- `currentFocus` — update when Jasper's focus shifts (read from North Star.md)
- `updatedAt` — always update to today's date after making any change (format: YYYY-MM-DD)
- `openTo` — update if Jasper's availability changes

### `/content/timeline.json`
- Add new entries when a project ships, hits a milestone, or starts
- Format: `{ "date": "YYYY-MM-DD", "title": "...", "description": "...", "project": "slug", "type": "ship|milestone|start" }`
- Keep sorted newest-first (the UI re-sorts, but keep file clean)

---

## What the Agent CANNOT Change

- `bio` in `about.json` — only Jasper edits this
- `tagline` in `about.json` — only Jasper edits this
- `insight`, `problem`, `whatWasBuilt` in any project — only Jasper edits these
- `principles.json` — only Jasper edits this
- Any file outside `/content/`
- This file (`AGENT_RULES.md`)

---

## Tone Rules (read when adding new projects or updating descriptions)

- Direct. No fluff.
- First-person where applicable ("I built X because...")
- Metrics > adjectives. "7 days" beats "incredibly fast"
- Never use: "leverage", "seamless", "innovative", "cutting-edge", "world-class", "exciting", "passionate", "thrilled"
- Technical specificity signals credibility. Name the stack, name the numbers.

---

## Update Workflow

1. Read `~/my-vault/brain/North Star.md`
2. Read relevant memory files in `~/.claude/projects/-Users-jasd/memory/`
3. Compare against current `/content/` state
4. Make minimal, accurate edits — only change what has actually changed
5. Update `about.json.updatedAt` to today
6. `git add content/ && git commit -m "chore: portfolio update YYYY-MM-DD"`
7. Vercel auto-deploys on push to main

---

## Adding a New Project

Minimum required fields:
```json
{
  "slug": "kebab-case-name",
  "name": "Display Name",
  "subtitle": "One-line description",
  "status": "building",
  "statusLabel": "Building",
  "tagline": "Short punchy tagline.",
  "description": "2-3 sentence description. What problem, what solution, why it matters.",
  "insight": "The observation that led to building this.",
  "problem": "The specific problem being solved.",
  "whatWasBuilt": "What actually shipped or is being built.",
  "stack": ["Tech1", "Tech2"],
  "metrics": {},
  "links": {},
  "color": "#8a8f98",
  "featured": false,
  "order": 99
}
```

Set `featured: true` and adjust `order` only after the project is live or in active development.
