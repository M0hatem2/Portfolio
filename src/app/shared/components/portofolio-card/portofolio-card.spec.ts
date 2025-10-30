import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioCard } from './portofolio-card';

describe('PortofolioCard', () => {
  let component: PortofolioCard;
  let fixture: ComponentFixture<PortofolioCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
