import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroListComponent } from 'src/app/hero-team-selector/components/hero-list/hero-list.component';
import { HeroListItemComponent } from 'src/app/hero-team-selector/components/hero-list-item/hero-list-item.component';
import { TeamComponent } from 'src/app/hero-team-selector/components/team/team.component';
import { HeroCardComponent } from 'src/app/hero-team-selector/components/hero-card/hero-card.component';
import { EmptyCardComponent } from 'src/app/hero-team-selector/components/empty-card/empty-card.component';
import { TeamSelectorComponent } from './team-selector.component';

describe('TeamSelectorComponent', () => {
  let component: TeamSelectorComponent;
  let fixture: ComponentFixture<TeamSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
      TeamSelectorComponent,
      HeroListComponent,
      HeroListItemComponent,
      TeamComponent,
      HeroCardComponent,
      EmptyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectorComponent);
    component = fixture.componentInstance;
    spyOn(window, 'alert');
    fixture.detectChanges();
  });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
   it('should add Hero in heroesTeam when onSelectMember is called with Hero', () => {
    component.wickedTeam = [];
    component.heroesTeam = [];
    component.onSelectMember(hero);
    expect(component.heroesTeam.length).toEqual(1);
  });
  it('should called window.alert when you try to add hero with full heroesTeam', () => {
    component.wickedTeam = [];
    component.heroesTeam = [{}, {}, {}, {}, {}];
    component.onSelectMember(hero);
    expect(component.heroesTeam.length).toEqual(5);
    expect(window.alert).toHaveBeenCalled();
  });
  it('should add Hero in wickedTeam when onSelectMember is called with Wicked', () => {
    component.wickedTeam = [];
    component.heroesTeam = [];
    component.onSelectMember(wicked);
    expect(component.wickedTeam.length).toEqual(1);
  });
  it('should called window.alert when you try to add hero with full wickedTeam', () => {
    component.wickedTeam = [{}, {}, {}, {}, {}];
    component.heroesTeam = [];
    component.onSelectMember(wicked);
    expect(component.wickedTeam.length).toEqual(5);
    expect(window.alert).toHaveBeenCalled();
  });
  
   it('should remove hero from heroesTeam when onRemoveMember was called with an hero', () => {
    component.wickedTeam = [];
    component.heroesTeam = [
      {
        id: 2,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      },
      {
        id: 1,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      },
      {
        id: 3,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      }
    ];
    component.onRemoveMember(heroToRemove);
    expect(component.heroesTeam.length).toEqual(2);
  });
  it('should remove wicked from wickedTeam when onRemoveMember was called with an wicked', () => {
    component.wickedTeam = [
      {
        id: 2,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      },
      {
        id: 1,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      },
      {
        id: 3,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      }
    ];
    component.heroesTeam = [];
    component.onRemoveMember(wickedToRemove);
    expect(component.wickedTeam.length).toEqual(2);
  });
});
