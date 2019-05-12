import { Component, OnInit } from '@angular/core';
import { Player } from './models/player.model';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
}
