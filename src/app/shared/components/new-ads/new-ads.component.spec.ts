import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdsComponent } from './new-ads.component';

describe('NewAdsComponent', () => {
  let component: NewAdsComponent;
  let fixture: ComponentFixture<NewAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAdsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdsComponent);
    component = fixture.componentInstance;
    component.data = { title: 'Title1', message: 'lorem ipsum1' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
