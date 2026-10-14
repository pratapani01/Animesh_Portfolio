# Animesh — The Series

A cinematic, streaming-inspired developer portfolio for **Animesh Pratap Singh**
(React 18 + Vite + TypeScript + Tailwind CSS 4 + Framer Motion).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Make it yours: 3 things to replace

1. **Photo** — replace `pic1.jpeg` (high-res photo) and `pic.png` (same photo with the
   background removed, transparent PNG, same framing). Then run:
   ```bash
   npm run images
   ```
   This regenerates `public/assets/portrait-*.webp` and the social share image.
   (The files currently there are placeholder silhouettes.)
2. **Resume** — drop your real PDF at `public/assets/Animesh_Pratap_Singh_Resume.pdf`
   (a generated placeholder resume is there now). Keep the same filename, or update
   `resumePdf` / `resumeFileName` in `src/data/portfolio.ts`.
3. **Content** — everything (name, links, education, projects, skills, achievements,
   timeline) lives in **`src/data/portfolio.ts`**. Edit it and the whole site updates.

Project cards show a **Live** button when `live` is set and a **GitHub** button when
`github` is set; leave either out to hide it.

## Deploy

Works on Vercel / Netlify out of the box: build command `npm run build`, output `dist`.
