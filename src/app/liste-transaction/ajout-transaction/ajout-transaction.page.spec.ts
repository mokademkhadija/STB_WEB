import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutTransactionPage } from './ajout-transaction.page';

describe('AjoutTransactionPage', () => {
  let component: AjoutTransactionPage;
  let fixture: ComponentFixture<AjoutTransactionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
