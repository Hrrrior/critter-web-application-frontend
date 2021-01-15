import {Component} from '@angular/core';
import {GamesService} from './services/games.service';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'critter-frontend';

  constructor(private api: ApiService, private gamesService: GamesService) {}

  ngOnInit(): void {
    this.api.getGames().subscribe(games => {
      this.gamesService.changeGames(games);
    });
  }
}
