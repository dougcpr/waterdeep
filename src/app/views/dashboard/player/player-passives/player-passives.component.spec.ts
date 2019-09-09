import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPassivesComponent } from './player-passives.component';

describe('PlayerPassivesComponent', () => {
  let component: PlayerPassivesComponent;
  let fixture: ComponentFixture<PlayerPassivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPassivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPassivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
