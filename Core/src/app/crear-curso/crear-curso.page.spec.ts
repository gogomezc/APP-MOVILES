import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCursoPage } from './crear-curso.page';

describe('CrearCursoPage', () => {
  let component: CrearCursoPage;
  let fixture: ComponentFixture<CrearCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
