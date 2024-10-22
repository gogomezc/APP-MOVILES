import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrscannerPage } from './qrscanner.page';

describe('QrscannerPage', () => {
  let component: QrscannerPage;
  let fixture: ComponentFixture<QrscannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
