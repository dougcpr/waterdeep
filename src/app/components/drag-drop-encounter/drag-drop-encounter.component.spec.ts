import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropEncounterComponent } from './drag-drop-encounter.component';

describe('DragDropEncounterComponent', () => {
  let component: DragDropEncounterComponent;
  let fixture: ComponentFixture<DragDropEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
