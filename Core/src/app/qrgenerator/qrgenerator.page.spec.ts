import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrgeneratorPage } from './qrgenerator.page';

describe('QrgeneratorPage', () => {
  let component: QrgeneratorPage;
  let fixture: ComponentFixture<QrgeneratorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrgeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
