import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-player-sheet',
  templateUrl: './player-sheet.component.html',
  styleUrls: ['./player-sheet.component.scss']
})
export class PlayerSheetComponent implements OnInit {
  @Input() user: User;
  @Input() mode;
  imagePath = '';
  constructor() { }

  async ngOnInit() {
    await this.calculateImagePath();
  }
  calculateImagePath() {
    this.imagePath = `../../../../../assets/icons/${this.user.class}.png`;
  }

}
