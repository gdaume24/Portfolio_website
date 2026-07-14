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
    { value: '6+', label: 'Projets solides' },
    { value: '3', label: 'Stacks back/front' },
    { value: '100%', label: 'Orienté démo' }
  ];

  protected readonly approachCards: ApproachCard[] = [
    {
      icon: '✦',
      title: 'Interfaces nettes',
      description: 'Des pages lisibles, responsives, rapides à comprendre et agréables à parcourir.'
    },
    {
      icon: '⚡',
      title: 'Backends utiles',
      description: 'APIs REST, authentification, persistance SQL, Swagger et logique métier structurée.'
    },
    {
      icon: '⌁',
      title: 'IA pragmatique',
      description: 'Prototypes Python, FastAPI, Streamlit et automatisations qui restent expliquables.'
    },
    {
      icon: '✓',
      title: 'Livraison vérifiable',
      description: 'Tests, README, CI, commandes de lancement et chemins de déploiement concrets.'
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