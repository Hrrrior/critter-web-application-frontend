import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Game} from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private gamesSource = new BehaviorSubject<Game[]>([]);
  currentGames = this.gamesSource.asObservable();
  games: Game[];

  constructor() {
  }

  public changeGames(games: Game[]): void {
    this.gamesSource.next(games);
    this.games = games;
  }

  public addGame(game: Game): void {
    this.games.push(game);
    this.changeGames(this.games);
  }

  public removeGame(game: Game): void {
    this.games.splice(this.games.indexOf(game), 1);
    this.changeGames(this.games);
  }
}
