import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projets } from './projets';

describe('Projets', () => {
  let component: Projets;
  let fixture: ComponentFixture<Projets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projets],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
