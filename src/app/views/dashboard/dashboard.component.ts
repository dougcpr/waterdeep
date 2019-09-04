import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  players = [];
  encounters;
  roster;
  showRoster = false;
  constructor(
    private http: HttpService
  ) {}
  ngOnInit() {
    /** retrieve the player list */
    this.getPlayers();
    this.http.getEncounters()
      .subscribe((encounters) => {
        this.encounters = encounters;
      });
  }
  showCharacters() {
    this.showRoster = !this.showRoster;
  }
  updatePlayer(player) {
    setTimeout(() => {
      this.http.updatePlayer(player)
        .subscribe((activePlayers) => {
          this.players = activePlayers;
        });
    });
  }
  getPlayers() {
    this.http.getPlayers()
      .subscribe((players: [Player]) => {
        this.roster = players;
        this.players = [];
        players.map((newPlayer) => {
          if (newPlayer.active) {
            this.players.push(newPlayer);
          }
        });
      });
  }
  logout() {
    localStorage.removeItem('auth');
  }
}
