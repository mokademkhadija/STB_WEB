import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsClientPage } from './details-client.page';

describe('DetailsClientPage', () => {
  let component: DetailsClientPage;
  let fixture: ComponentFixture<DetailsClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
