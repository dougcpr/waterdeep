import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }
  showCalendar() {
    this.bottomSheet.open(BottomSheetComponent);
  }

}
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class BottomSheetComponent implements OnInit {
  dates;
  constructor(
    private http: HttpService
  ) {}
  ngOnInit(): void {
    this.http.getDates()
      .subscribe((dates) => {
        console.log(dates);
        this.dates = dates[0].dates;
      });
  }
}
