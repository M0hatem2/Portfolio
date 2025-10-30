import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCv } from './card-cv';

describe('CardCv', () => {
  let component: CardCv;
  let fixture: ComponentFixture<CardCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
