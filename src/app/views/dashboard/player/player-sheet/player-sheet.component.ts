import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-sheet',
  templateUrl: './player-sheet.component.html',
  styleUrls: ['./player-sheet.component.scss']
})
export class PlayerSheetComponent implements OnInit {
  @Input() mode;
  constructor() { }

  ngOnInit() {
  }

}
