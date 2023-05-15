import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutCardPage } from './ajout-card.page';

describe('AjoutCardPage', () => {
  let component: AjoutCardPage;
  let fixture: ComponentFixture<AjoutCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
