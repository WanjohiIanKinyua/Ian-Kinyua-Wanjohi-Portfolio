# Ian Kinyua Wanjohi Portfolio

A personal portfolio website for Ian Kinyua Wanjohi, software engineer and IT specialist, showcasing professional experience, technical skills, education, certifications and selected software projects.

Live site: https://ian-kinyua-wanjohi-portfolio.vercel.app

## Features

- Light and dark themes (opens in light mode and remembers the visitor's choice)
- Mobile-first responsive layout with a full-screen mobile menu
- Work experience timeline, grouped skills, education and certifications
- Filterable projects with live-site and source-code links
- Resume download

## Built With

- React 19
- TypeScript
- Vite
- CSS (custom design system with CSS variables, no framework)
- Font Awesome 4.7 and Google Fonts (Sora, Manrope)

## Updating Content

All text lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile details, stats, experience, skills, projects, education, certifications and blog posts. Edit that file and the page updates; no HTML changes needed.

To add a project, append an entry to the `projects` array, for example:

```ts
{
  title: "My New Project",
  label: "Web app",
  category: "web",          // "web" | "data" | "mobile"
  accent: "teal",           // card colour
  description: "What it does and who it's for.",
  stack: ["React", "TypeScript"],
  live: "https://example.com",       // optional
  source: "https://github.com/...",  // optional
}
```

Images and the resume PDF live in `public/`.

## Project Structure

```text
.
|-- public/
|   |-- assets/img/                 Images
|   `-- Ian_Kinyua_Wanjohi_Resume.pdf
|-- src/
|   |-- components/                 Page sections (Hero, About, Projects, ...)
|   |-- data/portfolio.ts           All site content
|   |-- hooks/                      Theme and scroll hooks
|   |-- types.ts                    Content types
|   |-- index.css                   Styles
|   |-- App.tsx
|   `-- main.tsx
|-- index.html
|-- vite.config.ts
|-- vercel.json
`-- package.json
```

## Running Locally

Requires Node.js 20 or later.

```sh
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # type-check and build to dist/
npm run preview    # preview the production build
```

The build uses relative paths, so `dist/` can also be served from a sub-folder, for example with XAMPP at `http://localhost/Iankin%20Portfolio/dist/` after running `npm run build`.

## Deployment

Vercel builds the site with `npm run build` and serves `dist/` (configured in `vercel.json`).

## Contact

Ian Kinyua Wanjohi
Email: `ianwanjohi20@gmail.com`
Phone: `+254 725 751 322`

## License

This project is for personal portfolio use.
