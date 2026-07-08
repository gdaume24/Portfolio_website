import { Component } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  impact: string[];
  repository?: string;
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
      title: 'AI-powered mental health assessment',
      subtitle: 'End-to-end ML product prototype',
      description:
        'Applied machine-learning workflow with exploratory analysis, model training, FastAPI serving, Streamlit UI, SQLite prediction history, and API tests.',
      stack: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit', 'SQLite', 'Pytest'],
      impact: [
        'Structured as a portfolio-ready AI application, not just notebooks',
        'Includes responsible-use framing and deployment roadmap',
        'API layer hardened with safer parsing and parameterized SQL'
      ],
      repository: 'https://github.com/gdaume24/AI-powered-mental-health-assessment'
    },
    {
      title: 'Automatic Song Upload Bandcamp',
      subtitle: 'Desktop automation for music catalog operations',
      description:
        'Python automation suite combining a Tkinter interface and Selenium workflows to accelerate large music-library upload and synchronization tasks.',
      stack: ['Python', 'Selenium', 'Tkinter', 'Automation'],
      impact: [
        'Transforms a repetitive business workflow into a guided desktop tool',
        'Handles browser automation for dynamic web upload flows',
        'Built from a real client need, with practical operator ergonomics'
      ],
      repository: 'https://github.com/gdaume24/Automatic-Song-Upload-Bandcamp'
    },
    {
      title: 'Dev Social Network',
      subtitle: 'Spring Boot and Angular full-stack platform',
      description:
        'Full-stack social/article platform demonstrating backend security, REST API design, Angular UI integration, and enterprise Java development patterns.',
      stack: ['Java', 'Spring Boot', 'Angular', 'JWT', 'PostgreSQL', 'JUnit'],
      impact: [
        'Backend security and role-aware access patterns',
        'Clean API separation between frontend and backend concerns',
        'Testing-oriented structure for maintainable feature evolution'
      ],
      repository: 'https://github.com/gdaume24/Dev-Social-Network'
    },
    {
      title: 'Client Commande ecosystem',
      subtitle: '.NET / Angular business application',
      description:
        'Customer and order management application focused on clean data flows, maintainable business logic, and production-style application structure.',
      stack: ['C#', '.NET', 'ASP.NET Core', 'Angular', 'SQL Server'],
      impact: [
        'Business-oriented CRUD workflows and data modeling',
        'Separation of frontend and backend responsibilities',
        'A strong base for CRM/order-management deployment scenarios'
      ],
      repository: 'https://github.com/gdaume24/PROJET_Client_Commande_ASPNET'
    }
  ];
}
