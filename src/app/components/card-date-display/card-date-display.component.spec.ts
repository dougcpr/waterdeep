import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDateDisplayComponent } from './card-date-display.component';

describe('CardDateDisplayComponent', () => {
  let component: CardDateDisplayComponent;
  let fixture: ComponentFixture<CardDateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
