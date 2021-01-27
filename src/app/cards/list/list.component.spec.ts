import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CardService } from '../../services/card/card.service';
import { TestCardService } from 'src/app/services/card/test-card.service';
import { TestRandomDataGeneratorModule } from 'src/app/services/random-data-generator/test-random-data-generator.module';

import { ListComponent } from './list.component';
import { Card } from 'src/app/models/card';
import { UserInterfaceResources } from 'src/app/utilities/user-interface.resources';
import { FilteredComponent } from './filtered/filtered.component';

describe('CardListComponent', () => {
  let listComponent: ListComponent;
  let cardService: TestCardService;
  let fixture: ComponentFixture<ListComponent>;
  const cards: Card[] = [{
    id: 'bbf2dcb6-f513-4440-a0e8-b59518b29165',
    firstName: 'Melvin',
    lastName: 'Perry',
    gender: 'male',
    photo: '35.jpg',
    job: 'QA'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatIconModule,
        MatListModule,
        NoopAnimationsModule,
        TestRandomDataGeneratorModule
      ],
      providers: [ListComponent,
        { provide: CardService, useClass: TestCardService }
      ],
      declarations: [ ListComponent, FilteredComponent ]
    }).compileComponents();

    cardService = TestBed.inject(CardService);
    listComponent = TestBed.inject(ListComponent);
  });

  it('should create page', () => {
    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const page = fixture.componentInstance;
    expect(page).toBeTruthy();
  });

  it('#ngOnInit subscribes for cards', () => {
    listComponent.ngOnInit();
    listComponent.cards$.subscribe(c => {
      expect(listComponent.allCards).toEqual(c);
    });
  });

  it('#generateCards generate specific number of cards', () => {
    spyOn(listComponent.cards$, 'next');
    spyOn(cardService, 'getAll');
    spyOn(cardService, 'addCards');
    listComponent.generateCards('1');
    expect(cardService.addCards).toHaveBeenCalledWith(cards);
    expect(listComponent.cards$.next).toHaveBeenCalledWith(cardService.getAll());
  });

  it('#cardsUpdate updates card list', () => {
    spyOn(listComponent.cards$, 'next');
    listComponent.cardsUpdate(cards);
    expect(listComponent.cards$.next).toHaveBeenCalledWith(cards);
  });

  xit('should render labels on the page', () => {
    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    // listComponent.cards$.next([]);
    // listComponent.ngOnInit();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-form-button').textContent).toEqual(UserInterfaceResources.ClearLabel);
    expect(compiled.querySelector('.cards-to-generate-label').textContent).toEqual(UserInterfaceResources.CardsToGenerateLabel);
  });
});
