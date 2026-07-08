import { Component } from '@angular/core';
import { Formations } from './formations/formations';
import { Projets } from './projets/projets';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Formations, Projets, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly profileHighlights = [
    'Java / Spring Boot and Angular full-stack delivery',
    'AI, automation, and workflow engineering with Python and n8n',
    'Test-driven, deployment-aware engineering for business applications'
  ];

  protected readonly skills = [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'Python',
    'FastAPI',
    '.NET',
    'SQL',
    'Docker',
    'GitHub Actions',
    'n8n',
    'Selenium'
  ];
}
