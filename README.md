# Geoffroy Daumer — Portfolio website

Angular portfolio for presenting selected full-stack, AI and automation projects with a deployment-first structure.

The portfolio is intentionally curated: it highlights projects that can be explained, tested, deployed or reviewed through clear case studies instead of listing every small repository.

## Current content strategy

### Flagship demos

1. **Dev Social Network**
   - Full-stack Angular + Spring Boot social platform for developers.
   - Best candidate for the first live interactive demo.
   - Target presentation: frontend URL + API Swagger URL + GitHub repository + local demo docs.

2. **AI-powered Mental Health Assessment**
   - Educational applied-ML prototype with FastAPI and Streamlit.
   - Best candidate for the second live demo.
   - Target presentation: Streamlit UI + FastAPI `/docs` + clear responsible-use disclaimer.

### Supporting portfolio projects

- **Rental Portal Spring Boot API** — backend/API showcase for an existing Angular rental portal.
- **Full-Stack Yoga App Testing** — quality/testing case study around Angular, Spring Boot, Jest/JUnit/Cypress.
- **Client / Commande API** — layered ASP.NET Core backend with EF Core, JWT and SQL Server.
- **Bandcamp Upload Automation** — real-world Python/Selenium/Tkinter workflow automation.

Small POCs and duplicate coursework are deliberately omitted from the visible portfolio.

## Deployment architecture

The portfolio now contains a deployment section with four lanes:

1. **Static portfolio front door**
   - Deploy this Angular site to Cloudflare Pages, Netlify, Vercel or GitHub Pages.
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio/browser`

2. **Interactive full-stack demo lane**
   - Priority: Dev Social Network.
   - Recommended shape:
     - Angular frontend on a static host.
     - Spring Boot API as a container service.
     - Managed MySQL database.
     - Seeded data and scheduled reset for public demos.
     - Swagger exposed on the API subdomain.

3. **AI prototype demo lane**
   - Priority: AI-powered Mental Health Assessment.
   - Recommended shape:
     - Streamlit public UI.
     - FastAPI model service.
     - Healthcheck and API docs exposed.
     - Public demo mode with disclaimer and minimal/anonymized persistence.

4. **API showcase lane**
   - Rental Portal and Client / Commande fit here.
   - Use Swagger/demo API only when hosting cost and maintenance are justified.
   - Otherwise present polished repositories, screenshots and case-study wording.

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

Good deployment targets:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- Any static web server or CDN

If deploying under a GitHub Pages project path, build with the right base href, for example:

```bash
npx ng build --base-href /Portfolio_website/
```

## Next deployment TODO

- Deploy the portfolio site itself.
- Decide the final domain/subdomain scheme.
- Deploy Dev Social Network first and replace the “Public demo planned” badge with the live URL.
- Deploy the AI assessment carefully with responsible-use copy.
- Add screenshots or short demo videos for projects that should not be hosted 24/7.
