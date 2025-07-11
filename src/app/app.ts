import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formations } from './formations/formations';
import { Projets } from './projets/projets';
import { Footer } from './footer/footer';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formations, Projets, Footer, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
  private m_projectsActive = false;

  public Projects(): void {
    this.m_projectsActive = !this.m_projectsActive;
  }

  public get ProjectsActive(): boolean {
    return this.m_projectsActive;
  }
}
