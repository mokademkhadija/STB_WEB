import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutReclamationPage } from './ajout-reclamation.page';

describe('AjoutReclamationPage', () => {
  let component: AjoutReclamationPage;
  let fixture: ComponentFixture<AjoutReclamationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
