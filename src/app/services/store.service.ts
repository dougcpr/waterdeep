import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private router: Router) {}
  get() {
    return JSON.parse(localStorage.getItem('store'));
  }
  set(_store) {
    console.log(_store);
    localStorage.setItem('store', JSON.stringify(_store));
  }
  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('store');
    this.router.navigate(['/']);
  }
}
