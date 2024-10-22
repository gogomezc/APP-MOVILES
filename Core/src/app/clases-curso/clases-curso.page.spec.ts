import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasesCursoPage } from './clases-curso.page';

describe('ClasesCursoPage', () => {
  let component: ClasesCursoPage;
  let fixture: ComponentFixture<ClasesCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
