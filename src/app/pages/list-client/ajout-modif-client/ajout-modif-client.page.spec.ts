import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutModifClientPage } from './ajout-modif-client.page';

describe('AjoutModifClientPage', () => {
  let component: AjoutModifClientPage;
  let fixture: ComponentFixture<AjoutModifClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutModifClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
