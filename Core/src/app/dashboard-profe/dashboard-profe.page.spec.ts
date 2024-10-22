import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProfePage } from './dashboard-profe.page';

describe('DashboardProfePage', () => {
  let component: DashboardProfePage;
  let fixture: ComponentFixture<DashboardProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
