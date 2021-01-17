import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDataGeneratorService } from './../../services/random-data-generator/random-data-generator.service';
import { CardService } from './../../services/card/cards.service';
import { MockCardsService } from 'src/app/services/card/mock.cards.service';
import { TestRandomDataGeneratorModule } from 'src/app/services/random-data-generator/test-random-data-generator.module';

import { ListComponent } from './list.component';
import { Card } from 'src/app/models/card';
import { MockRandomDataGeneratorService } from 'src/app/services/random-data-generator/mock-random-data-generator.service';

fdescribe('CardListComponent', () => {
  let listComponent: ListComponent;
  let randomDataService: MockRandomDataGeneratorService;
  let cardService: MockCardsService;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRandomDataGeneratorModule],
      providers: [ListComponent,
        { provide: CardService, useClass: MockCardsService }
      ],
      declarations: [ ListComponent ]
    }).compileComponents();

    randomDataService = TestBed.inject(RandomDataGeneratorService);
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

  fit('#generateCards generate specific number of cards', () => {
    spyOn(randomDataService, 'getRandomJobList');
    spyOn(listComponent.cards$, 'next');
    spyOn(cardService, 'getAll');
    spyOn(cardService, 'addCards');
    const cards: Card[] = [{
      id: '6c306c4a-fd29-4e12-9f29-eb6c4b99eec5',
      firstName: 'Melvin',
      lastName: 'Perry',
      gender: 'male',
      photo: '35.jpg',
      job: 'QA'
    }];
    listComponent.generateCards('1');
    expect(cardService.addCards).toHaveBeenCalledWith(cards);
    expect(listComponent.cards$.next).toHaveBeenCalledWith(cardService.getAll());
  });
});
