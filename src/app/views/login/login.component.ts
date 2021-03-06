import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  clicked = false;
  constructor(private _httpService: HttpService, private router: Router, private store: StoreService) { }

  ngOnInit() {
  }
  updateText($event) {
    this.username = $event.detail;
  }
  login() {
    document.getElementById('login-button').innerHTML = '<dwc-loader></dwc-loader>';
    this._httpService.loginUser({username: this.username})
      .subscribe((response: User) => {
        if (response) {
          this.store.set(response);
          localStorage.setItem('auth', 'true');
          this.router.navigate([`/dashboard/${response[0].role}`]);
        } else {
          document.getElementById('login-button').innerHTML = 'Login';
          console.log('Username Not Found');
          // show error message D:
        }
      });
  }
  navigateToRegisterPage() {
    this.clicked = !this.clicked;
    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 500);
  }

  detectEnterKey($event) {
    if ($event.key === 'Enter') {
      this.login();
    }
  }
}
