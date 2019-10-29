import { Component, Input, OnInit } from '@angular/core';
import { Abilities } from '../../../../models/player.model';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  @Input() mode;
  @Input() user: User;
  abilities = Abilities;
  constructor() { }

  ngOnInit() {
  }

}
