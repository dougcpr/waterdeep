import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-player-passives',
  templateUrl: './player-passives.component.html',
  styleUrls: ['./player-passives.component.scss']
})
export class PlayerPassivesComponent implements OnInit {
  @Input() mode;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
