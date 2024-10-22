import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoDetallePage } from './curso-detalle.page';

describe('CursoDetallePage', () => {
  let component: CursoDetallePage;
  let fixture: ComponentFixture<CursoDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
