import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeTransactionPage } from './liste-transaction.page';

describe('ListeTransactionPage', () => {
  let component: ListeTransactionPage;
  let fixture: ComponentFixture<ListeTransactionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
