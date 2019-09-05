import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userRole = '';
  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // looks at user role when navigating to the dashboard
    // he DOM loads different components depending on the role
    // if no role is found then it will navigate back to the login page
    this.activatedRoute.params
      .subscribe((param) => {
        param.role ? this.userRole = param.role : this.router.navigate(['/']);
      });
  }
  ngOnInit() {}

}
