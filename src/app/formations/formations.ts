import { Component } from '@angular/core';

interface Formation {
  title: string;
  organization: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-formations',
  imports: [],
  templateUrl: './formations.html',
  styleUrl: './formations.css'
})
export class Formations {
  protected readonly formations: Formation[] = [
    {
      title: 'Full-stack Java / Angular developer',
      organization: 'OpenClassrooms',
      description:
        'Professional full-stack path focused on Java, Spring Boot, Angular, REST APIs, tests, and production-style delivery.',
      skills: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'Unit tests', 'End-to-end tests']
    },
    {
      title: 'AI developer',
      organization: 'Simplon x ISEN',
      description:
        'Applied AI training covering data analysis, model training, Python applications, API exposure, cloud concepts, and technical watch.',
      skills: ['Python', 'Machine learning', 'Pandas', 'APIs', 'Cloud basics', 'Technical watch']
    },
    {
      title: 'Client-driven automation delivery',
      organization: 'Freelance / real-world project',
      description:
        'Designed and built a music-upload automation tool from an operational need, combining GUI design and browser automation.',
      skills: ['Automation', 'Selenium', 'Tkinter', 'Workflow analysis', 'Delivery ownership']
    }
  ];
}
