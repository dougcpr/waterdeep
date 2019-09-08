import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player.model';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.scss']
})
export class DmComponent implements OnInit {
  players = [];
  encounters;
  roster;
  showRoster = false;
  constructor(
    private http: HttpService,
    private store: StoreService
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
    this.store.logout();
  }

}
