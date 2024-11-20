import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasesAsistenciaPage } from './clases-asistencia.page';

describe('ClasesAsistenciaPage', () => {
  let component: ClasesAsistenciaPage;
  let fixture: ComponentFixture<ClasesAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
