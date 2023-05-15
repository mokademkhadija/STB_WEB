import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeReclamationPage } from './liste-reclamation.page';

describe('ListeReclamationPage', () => {
  let component: ListeReclamationPage;
  let fixture: ComponentFixture<ListeReclamationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
