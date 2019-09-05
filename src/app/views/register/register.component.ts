import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  clicked = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateHome() {
    this.clicked = !this.clicked;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
