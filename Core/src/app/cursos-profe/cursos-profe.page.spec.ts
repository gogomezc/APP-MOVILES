import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosProfePage } from './cursos-profe.page';

describe('CursosProfePage', () => {
  let component: CursosProfePage;
  let fixture: ComponentFixture<CursosProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
