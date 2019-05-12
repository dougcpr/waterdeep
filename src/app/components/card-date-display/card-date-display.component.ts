import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-date-display',
  templateUrl: './card-date-display.component.html',
  styleUrls: ['./card-date-display.component.scss']
})
export class CardDateDisplayComponent implements OnInit {
  @Input('date') date;
  constructor() { }

  ngOnInit() {
    console.log(this.date);
  }

}
