import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCartesPage } from './details-cartes.page';

describe('DetailsCartesPage', () => {
  let component: DetailsCartesPage;
  let fixture: ComponentFixture<DetailsCartesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsCartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
