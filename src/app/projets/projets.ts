import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url?: string;
  kind: 'repository' | 'demo' | 'case-study' | 'docs' | 'planned';
}

interface Project {
  title: string;
  subtitle: string;
  status: 'Live demo target' | 'Local demo ready' | 'Code showcase' | 'Backend/API showcase';
  role: string;
  description: string;
  stack: string[];
  highlights: string[];
  demoPlan: string;
  links: ProjectLink[];
}

@Component({
  selector: 'app-projets',
  imports: [],
  templateUrl: './projets.html',
  styleUrl: './projets.css'
})
export class Projets {
  protected readonly projects: Project[] = [
    {
      title: 'Dev Social Network',
      subtitle: 'Full-stack social platform for developers',
      status: 'Live demo target',
      role: 'Full-stack implementation: Spring Boot API, Angular UI, JWT auth, MySQL sandbox and documentation.',
      description:
        'A developer community app where users register, follow technical themes, publish articles and comment. This is the strongest project to deploy as an interactive recruiter demo.',
      stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'Angular 19', 'MySQL', 'Docker'],
      highlights: [
        'Complete authenticated user journey: register, login, themes, articles and comments',
        'Clean separation between Angular SPA, REST API, services, repositories and persistence',
        'Already documented with demo guide, architecture notes and verification report'
      ],
      demoPlan:
        'Deploy frontend as a static Angular app and backend as a containerized Spring Boot API backed by managed MySQL. Add seeded demo data and a reset policy for public use.',
      links: [
        { label: 'Repository', url: 'https://github.com/gdaume24/Dev-Social-Network', kind: 'repository' },
        { label: 'Local demo guide', url: 'https://github.com/gdaume24/Dev-Social-Network/blob/main/docs/DEMO.md', kind: 'docs' },
        { label: 'Public demo planned', kind: 'planned' }
      ]
    },
    {
      title: 'AI-powered Mental Health Assessment',
      subtitle: 'Applied ML product prototype',
      status: 'Live demo target',
      role: 'End-to-end AI workflow: EDA, training, FastAPI serving, Streamlit UI, SQLite prediction history and tests.',
      description:
        'An educational AI prototype that turns a mental-health questionnaire into a prediction workflow. It is presented responsibly as an ML engineering demo, not as a medical product.',
      stack: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit', 'SQLite', 'Pytest'],
      highlights: [
        'Shows the full applied-ML path from dataset exploration to API and UI',
        'Includes API tests, healthcheck, safer parsing and parameterized SQL inserts',
        'Strong discussion piece for responsible AI, limitations and deployment trade-offs'
      ],
      demoPlan:
        'Deploy Streamlit as the public UI and FastAPI as a separate API service. Keep a visible responsible-use disclaimer and avoid storing sensitive user inputs in the public demo.',
      links: [
        { label: 'Repository', url: 'https://github.com/gdaume24/AI-powered-mental-health-assessment', kind: 'repository' },
        { label: 'API docs planned', kind: 'planned' },
        { label: 'Streamlit demo planned', kind: 'planned' }
      ]
    },
    {
      title: 'Rental Portal Spring Boot API',
      subtitle: 'Backend built for an Angular rental portal',
      status: 'Backend/API showcase',
      role: 'Backend focus: Spring Boot API developed to replace a mocked Angular front-end backend.',
      description:
        'A real-estate rental portal backend with authentication, rental listings, messages, MySQL persistence and Swagger documentation. The honest portfolio angle is backend delivery for an existing Angular front.',
      stack: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'MySQL', 'Swagger'],
      highlights: [
        'Good proof of backend delivery against a front-end contract',
        'JWT authentication, protected routes, rental resources and messaging flow',
        'Best deployed as Swagger/API demo plus screenshots or a linked Angular front if maintained'
      ],
      demoPlan:
        'Deploy the API with Swagger first. If the Angular front remains stable, add a static front deployment that calls the public API.',
      links: [
        { label: 'Repository', url: 'https://github.com/gdaume24/Portail-location', kind: 'repository' },
        { label: 'Swagger demo planned', kind: 'planned' }
      ]
    },
    {
      title: 'Full-Stack Yoga App Testing',
      subtitle: 'Angular + Spring Boot testing portfolio project',
      status: 'Code showcase',
      role: 'Quality-focused full-stack project: backend tests, frontend tests and E2E-oriented structure.',
      description:
        'A full-stack yoga sessions app positioned around automated testing and maintainability. It is useful as a code-quality project even if it is not the first public demo to deploy.',
      stack: ['Angular', 'Spring Boot', 'JWT', 'MySQL', 'JUnit', 'Mockito', 'Jest', 'Cypress'],
      highlights: [
        'Strong testing angle: backend unit tests, frontend tests and coverage reporting',
        'Complements product demos by proving quality discipline',
        'Good candidate for repository link and screenshots rather than always-on hosting'
      ],
      demoPlan:
        'Keep as a repository/case-study item. Deploy only if the first two demos are already stable.',
      links: [
        { label: 'Repository', url: 'https://github.com/gdaume24/Test-Full-Stack-App', kind: 'repository' }
      ]
    },
    {
      title: 'Client / Commande API',
      subtitle: 'Layered ASP.NET Core backend',
      status: 'Backend/API showcase',
      role: 'Backend architecture: Domain, Application, Infrastructure and WebApi layers with EF Core and JWT.',
      description:
        'A business-oriented customer/order API that demonstrates .NET backend structure, REST controllers, repositories, Unit of Work, SQL Server and automated tests.',
      stack: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT', 'xUnit'],
      highlights: [
        'Strong backend architecture story for enterprise-style applications',
        'Pairs with the Angular ClientCommande front as a broader ecosystem',
        'Best showcased through Swagger, repository structure and tests'
      ],
      demoPlan:
        'Deploy as an API/Swagger demo after .NET runtime and SQL Server hosting are configured. Keep frontend as a linked companion project.',
      links: [
        { label: 'Repository', url: 'https://github.com/gdaume24/PROJET_Client_Commande_ASPNET', kind: 'repository' },
        { label: 'API demo planned', kind: 'planned' }
      ]
    },
    {
      title: 'Bandcamp Upload Automation',
      subtitle: 'Desktop workflow automation',
      status: 'Code showcase',
      role: 'Client-oriented automation: Python GUI plus browser automation for repetitive music catalog operations.',
      description:
        'A practical automation tool built from a real workflow need. It broadens the portfolio beyond CRUD apps and shows ability to ship operator-facing tools.',
      stack: ['Python', 'Selenium', 'Tkinter', 'Browser automation'],
      highlights: [
        'Real-world automation angle with a concrete business workflow',
        'Useful complement to web apps and AI projects',
        'Better shown through repository, screenshots or a short demo video than live hosting'
      ],
      demoPlan:
        'Add screenshots or a short GIF/video to the portfolio rather than deploying a desktop automation tool online.',
      links: [
        { label: 'Repository', url: 'https://github.com/gdaume24/Automatic-Song-Upload-Bandcamp', kind: 'repository' }
      ]
    }
  ];
}
