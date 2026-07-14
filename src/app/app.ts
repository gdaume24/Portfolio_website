import { Component } from '@angular/core';
import { Formations } from './formations/formations';
import { Projets } from './projets/projets';
import { Footer } from './footer/footer';

interface DeploymentTrack {
  name: string;
  purpose: string;
  target: string;
  notes: string[];
}

interface RoadmapStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [Formations, Projets, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly profileHighlights = [
    'Java / Spring Boot and Angular full-stack delivery',
    'AI and automation engineering with Python, FastAPI, Streamlit and n8n',
    'Deployment-aware portfolio: live demos, API docs, CI and reproducible local runs'
  ];

  protected readonly skills = [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'Python',
    'FastAPI',
    'Streamlit',
    '.NET',
    'SQL',
    'Docker',
    'CI/CD',
    'n8n'
  ];

  protected readonly deploymentTracks: DeploymentTrack[] = [
    {
      name: 'Static portfolio front door',
      purpose: 'Main personal website and navigation hub.',
      target: 'Cloudflare Pages, Netlify or Vercel from this Angular build.',
      notes: [
        'Deploy from `npm run build` with publish directory `dist/portfolio/browser`.',
        'Keep project cards stable and update demo links when each app goes live.',
        'Use a custom domain such as `geoffroydaumer.dev` or `portfolio.geoffroydaumer.dev`.'
      ]
    },
    {
      name: 'Interactive full-stack demo lane',
      purpose: 'Projects where a recruiter should be able to click and use the app.',
      target: 'Static Angular frontend + containerized API + managed database.',
      notes: [
        'Priority 1: Dev Social Network with Angular frontend, Spring Boot API and MySQL.',
        'Use seeded demo data and a scheduled reset so public testing stays clean.',
        'Expose Swagger on the API subdomain for technical reviewers.'
      ]
    },
    {
      name: 'AI prototype demo lane',
      purpose: 'Responsible AI demos that need disclaimers and simple availability.',
      target: 'Streamlit UI plus FastAPI service, either on Render/Fly/Railway or one VPS behind Caddy.',
      notes: [
        'Priority 2: AI-powered mental health assessment with explicit educational disclaimer.',
        'Avoid storing sensitive answers in public demo mode, or store only anonymized demo data.',
        'Expose `/health` and `/docs` for the FastAPI service.'
      ]
    },
    {
      name: 'API showcase lane',
      purpose: 'Backend-heavy projects where Swagger/repository structure matters more than a full UI.',
      target: 'Public Swagger URL or screenshots plus GitHub case study.',
      notes: [
        'Rental Portal and Client / Commande API fit here.',
        'Do not overclaim front-end ownership when the main contribution is backend/API work.',
        'Use screenshots and API docs if always-on hosting is not worth the cost.'
      ]
    }
  ];

  protected readonly roadmap: RoadmapStep[] = [
    {
      title: '1. Ship the portfolio site first',
      description:
        'Deploy this Angular site as a static app. It becomes the stable entry point while demo links are added progressively.'
    },
    {
      title: '2. Deploy Dev Social Network as the flagship demo',
      description:
        'Containerize the Spring Boot API, attach managed MySQL, deploy the Angular frontend, configure CORS and add seeded demo data.'
    },
    {
      title: '3. Deploy the AI assessment carefully',
      description:
        'Serve the Streamlit UI and FastAPI model endpoint with an educational disclaimer, no real medical claims and safe data handling.'
    },
    {
      title: '4. Add backend/API demos selectively',
      description:
        'Expose Swagger for Rental Portal and Client / Commande only if the cost/maintenance is justified; otherwise link polished repositories and screenshots.'
    }
  ];
}
