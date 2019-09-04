import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  route = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  loginUser(body): Observable<any> {
    return this.http.post(`${this.route}/login`, body);
  }
  getStoryBoard(): Observable<any> {
    return this.http.get(`${this.route}/getStoryBoard`);
  }
  getSideStory(): Observable<any> {
    return this.http.get(`${this.route}/getSideStory`);
  }
  getPlayers(): Observable<any> {
    return this.http.get(`${this.route}/getPlayers`);
  }
  getEncounters(): Observable<any> {
    return this.http.get(`${this.route}/getEncounters`);
  }
  getDates(): Observable<any> {
    return this.http.get(`${this.route}/dates`);
  }
  getFactionMissions(): Observable<any> {
    return this.http.get(`${this.route}/getFactionMissions`);
  }
  updateStoryBoard(body): Observable<any> {
    return this.http.post(`${this.route}/updateStoryBoard`, body);
  }
  updateFactionMission(body): Observable<any> {
    return this.http.post(`${this.route}/updateFactionStory`, body);
  }
  updateSideStory(body): Observable<any> {
    return this.http.post(`${this.route}/updateSideStory`, body);
  }
  updatePlayer(body): Observable<any> {
    return this.http.post(`${this.route}/updatePlayer`, body);
  }
}
