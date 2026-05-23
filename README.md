# Shreya Sagar — Portfolio

A clean, minimal, Apple-inspired software engineering portfolio built with **Next.js 15**, **Tailwind CSS v4**, and smooth CSS animations. Targeting SDE-1 roles at Google, Microsoft, and Amazon in 2027.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + CSS custom properties
- **Animations**: CSS keyframes + Intersection Observer API
- **Fonts**: DM Sans + DM Mono (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

## 🚀 Deploy to Vercel (Recommended — Free)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel           # follow prompts
vercel --prod    # deploy to production
```

### Option 2: GitHub → Vercel (Best for ongoing updates)
1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/shreyaa0918/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → "New Project" → Import your GitHub repo
3. Click Deploy — done! Auto-deploys on every push.

### Custom Domain
After deploying to Vercel, go to Project Settings → Domains → Add `shreyasagar.dev` or similar.

## 📁 Project Structure

```
app/
├── data/
│   └── portfolio.ts      ← ✏️ Edit ALL your content here
├── sections/
│   ├── Hero.tsx          ← Landing + stats
│   ├── Experience.tsx    ← Amazon, DB, Edu-versity
│   ├── Skills.tsx        ← Tech stack grid
│   ├── Education.tsx     ← Purdue + MANIT
│   ├── Projects.tsx      ← Projects + certs
│   └── Contact.tsx       ← CTA + footer
├── components/
│   └── Nav.tsx           ← Sticky navigation
├── globals.css           ← Design tokens + animations
├── layout.tsx            ← SEO metadata
└── page.tsx              ← Main composition
```

## ✏️ Customizing Content

All text content lives in **`app/data/portfolio.ts`** — edit it to:
- Add new internships or jobs to `experience[]`
- Add projects to `projects[]`
- Update skills in `skills{}`
- Add certifications to `certifications[]`

## Adding a Resume Download

Place your resume PDF at `public/resume.pdf`, then update the Resume link in `Contact.tsx`:
```tsx
{ label: "Resume", href: "/resume.pdf" }
```

## 🎨 Theming

Design tokens are in `globals.css` → `:root`. To change the accent color from blue to another:
```css
--accent: #your-color;
--accent-subtle: rgba(your-r, your-g, your-b, 0.06);
```
