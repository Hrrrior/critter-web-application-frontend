import {Component, OnInit} from '@angular/core';
import {Game} from '../../models/Game';
import {Router} from '@angular/router';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {
  games: Game[];
  searchText: string;
  params: {
    platform: string,
    sort: string,
    genre: string
  } = {
    platform: '',
    sort: '',
    genre: ''
  };

  constructor(private router: Router,
              private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.gamesService.currentGames.subscribe(games => this.games = games);
  }

  onClick(game: Game): void {
    this.router.navigate(['/game', game.id]);
  }
  receiveSearchText($event): void {
    this.searchText = $event;
  }

  receiveFilter($event): void {
    this.params = $event;
    console.log('Received');
  }
}
