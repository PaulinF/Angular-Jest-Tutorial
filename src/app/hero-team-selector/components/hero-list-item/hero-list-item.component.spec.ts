import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListItemComponent } from './hero-list-item.component';

describe('HeroListItemComponent', () => {
  let component: HeroListItemComponent;
  let fixture: ComponentFixture<HeroListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
  fixture = TestBed.createComponent(HeroListItemComponent);
  component = fixture.componentInstance;
  component.item = {
    id: 3,
    name: 'IronMan',
    real_name: 'Anthony Edward "Tony" Stark',
    thumb:
      'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_xlarge.jpg',
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg',
    description: ''
  };
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
