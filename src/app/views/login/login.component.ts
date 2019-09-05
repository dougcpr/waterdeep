import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  updateText($event) {
    this.username = $event.detail;
  }
  login() {
    this._httpService.loginUser({username: this.username})
      .subscribe((response: User) => {
        if (response) {
          localStorage.setItem('auth', 'true');
          // TODO: Check against response.role and load different dashboard with player data
          // TODO: otherwise load dm dashboard
          this.router.navigate([`/dashboard/${response[0].role}`]);
        } else {
          // show error message D:
        }
      });
  }

}
