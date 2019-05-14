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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
