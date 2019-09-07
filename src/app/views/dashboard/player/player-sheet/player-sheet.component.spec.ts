import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSheetComponent } from './player-sheet.component';

describe('PlayerSheetComponent', () => {
  let component: PlayerSheetComponent;
  let fixture: ComponentFixture<PlayerSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
