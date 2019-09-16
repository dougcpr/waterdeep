import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  debug = false;
  user;
  constructor(private router: Router, private store: StoreService) { }

  ngOnInit() {
    this.user = this.store.get();
  }
  logout() {
    this.store.logout();
  }
}
