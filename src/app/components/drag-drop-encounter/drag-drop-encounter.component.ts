import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-encounter',
  templateUrl: './drag-drop-encounter.component.html',
  styleUrls: ['./drag-drop-encounter.component.scss']
})
export class DragDropEncounterComponent implements OnInit, OnChanges {
  @Input() encounter;
  @Input() players;
  @Input() notes;
  listOfPlayers;
  constructor() { }

  ngOnInit() {
    this.listOfPlayers = Object.assign([], this.players);
  }
  ngOnChanges(changes) {
    this.listOfPlayers = [];
    changes.players.currentValue.map((player) => {
      if (player.active) {
        this.listOfPlayers.push(player);
      }
    });
    this.listOfPlayers = Object.assign([], this.listOfPlayers);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  subtract(item) {
    item.count = item.count - 1;
  }
  add(item) {
    item.count = item.count + 1;
  }

}
