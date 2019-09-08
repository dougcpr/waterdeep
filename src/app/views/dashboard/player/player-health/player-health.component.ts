import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-health',
  templateUrl: './player-health.component.html',
  styleUrls: ['./player-health.component.scss']
})
export class PlayerHealthComponent implements OnInit {
  @Input() mode;
  constructor() { }

  ngOnInit() {
  }

}
