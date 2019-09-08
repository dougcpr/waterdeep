import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  get() {
    return JSON.parse(localStorage.getItem('store'));
  }
  set(_store) {
    console.log(_store);
    localStorage.setItem('store', JSON.stringify(_store));
  }
}
