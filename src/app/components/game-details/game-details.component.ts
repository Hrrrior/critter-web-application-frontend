import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Game} from '../../models/Game';
import {GamesService} from '../../services/games.service';
import {ApiService} from '../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Utils} from "../../utils";
import {AuthenticationService} from "../../services/authentication.service";
import {UserLogin} from "../../models/UserLogin";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameID: number;
  game: Game;
  user: UserLogin;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gamesService: GamesService,
              private api: ApiService,
              private snackBar: MatSnackBar,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gameID = parseInt(params.get(('id')));
    });

    this.gamesService.currentGames.subscribe(games =>
      this.game = games.filter(g => g.id == this.gameID)[0]);

    this.user = this.authenticationService.currentUserValue;

  }

  public dateHuman(): string {
    if (!this.game) {
      return "unknown";
    }
    return new Date(this.game.releaseDate).toLocaleString('en', {year: 'numeric', month: 'long', day: 'numeric'});
  }


  onDelete(): void {
    this.api.deleteGame(this.gameID);
    this.gamesService.removeGame(this.game);
    this.router.navigate(['/']);
    Utils.showSnackbar(this.snackBar, 'Game successfully deleted!');
  }
}
