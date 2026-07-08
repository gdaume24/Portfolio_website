# Geoffroy Daumer — Portfolio website

Angular portfolio for presenting my full-stack engineering, AI automation, and deployment-minded product work.

## Highlights

- Modern responsive landing page with curated project case studies
- Portfolio positioning for Java/Spring Boot, Angular, Python, AI automation, and testing
- SEO metadata for search/social previews
- Downloadable CV from `public/files/CV.pdf`
- GitHub Actions CI for production build, production dependency audit, and headless unit tests
- Static build ready for GitHub Pages, Netlify, Vercel, or any CDN

## Tech stack

- Angular 20
- TypeScript
- Tailwind CSS 4
- npm

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production build

```bash
npm run build
```

The static output is generated in `dist/portfolio/browser/`.

## CI tests

```bash
npm run test:ci
```

The CI command uses a no-sandbox Chrome Headless launcher for Linux containers and VPS environments that run tests as root.

## Deployment notes

This app is a static Angular site. Good deployment targets:

- GitHub Pages with the built `dist/portfolio/browser` folder
- Netlify or Vercel with `npm run build` and publish directory `dist/portfolio/browser`
- Any static web server or CDN

If deploying under a GitHub Pages project path, build with the right base href, for example:

```bash
npx ng build --base-href /Portfolio_website/
```
