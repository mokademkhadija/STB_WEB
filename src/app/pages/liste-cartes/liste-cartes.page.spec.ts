import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeCartesPage } from './liste-cartes.page';

describe('ListeCartesPage', () => {
  let component: ListeCartesPage;
  let fixture: ComponentFixture<ListeCartesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeCartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
