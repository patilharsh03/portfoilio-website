# Harsh Patil — Portfolio ("Big Type")

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
Dark theme, lime accent, huge Anton headline, simple animations.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Put in your real details (one file)

Open **`lib/data.ts`**. Everything on the site reads from it:

- `profile` — name, role, cycling words, email, GitHub, LinkedIn
- `aboutStatement` / `aboutText` — your intro lines
- `aboutHighlights` — which words in the statement turn lime on scroll
- `projects` — 6 placeholders. For each: title, description, stack,
  `liveHref` (live link) and `repoHref` (GitHub repo)
- `skills` — the scrolling marquee

## Resume button

The "Download CV" buttons point at `/resume.pdf`. Put your resume file at
**`public/resume.pdf`** (exact name) or the button will 404. To use another
name, change `resume` in `lib/data.ts`.

## What's where

```
app/
  layout.tsx       fonts + page metadata (update title/description here)
  page.tsx         page order: Hero, Marquee, About, Projects, Contact
  globals.css      colors, fonts, avatar + marquee animations
components/
  Hero.tsx         letter-by-letter name reveal, cycling word, buttons
  Avatar.tsx       SVG avatar (blinks, waves, floats) — edit colors here
  Cursor.tsx       custom cursor dot (desktop only)
  Nav.tsx          fixed nav
  Marquee.tsx      outlined skills ticker
  About.tsx        scroll-highlight statement
  Projects.tsx     hover-reveal rows with Live Demo + GitHub buttons
  Contact.tsx      email, GitHub, LinkedIn, CV button
  Reveal.tsx       scroll fade-up wrapper
lib/data.ts        ALL your content
```
