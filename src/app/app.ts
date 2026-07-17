import { Component } from '@angular/core';
import { Formations } from './formations/formations';
import { Projets } from './projets/projets';
import { Footer } from './footer/footer';

interface Stat {
  value: string;
  label: string;
}

interface ApproachCard {
  icon: string;
  title: string;
  description: string;
}

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  imports: [Formations, Projets, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly stats: Stat[] = [
    { value: '6+', label: 'Curated projects' },
    { value: '3', label: 'Core stacks' },
    { value: '100%', label: 'Demo-focused' }
  ];

  protected readonly approachCards: ApproachCard[] = [
    {
      icon: '✦',
      title: 'Clean interfaces',
      description: 'Readable, responsive pages that make the product and user journey easy to understand.'
    },
    {
      icon: '⚡',
      title: 'Useful backends',
      description: 'REST APIs, authentication, SQL persistence, Swagger docs and structured business logic.'
    },
    {
      icon: '⌁',
      title: 'Pragmatic AI',
      description: 'Python, FastAPI, Streamlit and automation prototypes presented with clear limits.'
    },
    {
      icon: '✓',
      title: 'Verifiable delivery',
      description: 'Tests, README files, CI commands, launch steps and concrete deployment paths.'
    }
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      skills: ['Java', 'TypeScript', 'Python', 'C#', 'SQL']
    },
    {
      category: 'Frameworks',
      skills: ['Spring Boot', 'Angular', 'FastAPI', 'Streamlit', 'ASP.NET Core']
    },
    {
      category: 'Data & APIs',
      skills: ['REST', 'JWT', 'JPA', 'EF Core', 'MySQL', 'SQLite', 'Swagger']
    },
    {
      category: 'Delivery',
      skills: ['Docker', 'GitHub Actions', 'Netlify', 'Vercel', 'Testing', 'n8n']
    }
  ];
}