import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {GamesService} from '../../services/games.service';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Utils} from "../../utils";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  name: FormControl = new FormControl('');

  constructor(private api: ApiService,
              private gamesService: GamesService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  search(name: string): void {
    this.name.setValue('');

    this.api.saveGame(name).subscribe(
      game => {
        this.gamesService.addGame(game);
        Utils.showSnackbar(this.snackBar, 'Game successfully added!');
      },
      error => {
        Utils.showSnackbar(this.snackBar, `Error: ${error.error.message}`, true);
      }
    );
  }
}
