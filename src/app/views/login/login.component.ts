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
  clicked = false;
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
          this.router.navigate([`/dashboard/${response[0].role}`]);
        } else {
          console.log('Username Not Found');
          // show error message D:
        }
      });
  }
  navigateToRegisterPage() {
    this.clicked = !this.clicked;
    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 1000);
  }

}
