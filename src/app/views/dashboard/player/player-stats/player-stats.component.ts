import { Component, Input, OnInit } from '@angular/core';
import { Abilities } from '../../../../models/player.model';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  @Input() mode;
  stats = [
    {ability: 'strength', value: 12},
    {ability: 'dexterity', value: 8},
    {ability: 'intelligence', value: 16},
    {ability: 'wisdom', value: 14},
    {ability: 'charisma', value: 14}]
  ;
  abilities = Abilities;
  constructor() { }

  ngOnInit() {
  }

}
