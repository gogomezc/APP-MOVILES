import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosotrosAlumnosPage } from './nosotros-alumnos.page';

describe('NosotrosAlumnosPage', () => {
  let component: NosotrosAlumnosPage;
  let fixture: ComponentFixture<NosotrosAlumnosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
