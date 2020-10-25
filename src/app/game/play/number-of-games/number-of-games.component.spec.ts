import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfGamesComponent } from './number-of-games.component';

describe('NumberOfGamesComponent', () => {
  let component: NumberOfGamesComponent;
  let fixture: ComponentFixture<NumberOfGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
