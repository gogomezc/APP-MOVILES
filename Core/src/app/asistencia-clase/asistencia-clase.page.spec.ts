import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaClasePage } from './asistencia-clase.page';

describe('AsistenciaClasePage', () => {
  let component: AsistenciaClasePage;
  let fixture: ComponentFixture<AsistenciaClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
