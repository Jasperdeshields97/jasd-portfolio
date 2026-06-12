# jasd-portfolio

Personal portfolio site for Jasper DeShields: product builder working at the intersection of product management, data, and AI-assisted engineering.

The site is content-as-data: every page renders from structured JSON in `content/` (about, projects, timeline, principles), so the portfolio updates without touching components.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**

## Structure

```
app/          pages, layout, components
  projects/   per-project detail routes
content/      about, projects, timeline, principles (JSON)
```

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```
