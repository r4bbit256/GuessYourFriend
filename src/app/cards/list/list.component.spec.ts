import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardService } from './../../services/card/cards.service';
import { MockCardsService } from 'src/app/services/card/mock.cards.service';
import { TestRandomDataGeneratorModule } from 'src/app/services/random-data-generator/test-random-data-generator.module';

import { ListComponent } from './list.component';
import { Card } from 'src/app/models/card';

fdescribe('CardListComponent', () => {
  let listComponent: ListComponent;
  let cardService: MockCardsService;
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
      imports: [TestRandomDataGeneratorModule],
      providers: [ListComponent,
        { provide: CardService, useClass: MockCardsService }
      ],
      declarations: [ ListComponent ]
    }).compileComponents();

    cardService = TestBed.inject(CardService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    listComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(listComponent).toBeTruthy();
  });

  it('#ngOnInit subscribes for cards', () => {
    listComponent.ngOnInit();
    listComponent.cards$.subscribe(cards => {
      expect(listComponent.allCards).toEqual(cards);
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
});
