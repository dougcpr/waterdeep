import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  debug = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/']);
  }
}
