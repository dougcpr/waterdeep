import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

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
      .subscribe((response) => {
        if (response) {
          localStorage.setItem('auth', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          // show error message D:
        }
      });
  }

}
