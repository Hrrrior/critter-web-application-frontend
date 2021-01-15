import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Review} from '../../models/Review';
import {ApiService} from '../../services/api.service';
import {Game} from '../../models/Game';
import {UserLogin} from "../../models/UserLogin";
import {AuthenticationService} from "../../services/authentication.service";
import {Utils} from "../../utils";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input() game: Game;
  user: UserLogin

  text: FormControl = new FormControl();
  slider: number = 1;

  constructor(private api: ApiService,
              private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue
  }

  add() {
    if (this.user == null) {
      Utils.showSnackbar(this.snackBar, `Error: User not found.`, true);
      return;
    }
    let review = new Review({
      author: this.user.username,
      id: this.game.id,
      rating: this.slider,
      reviewDate: Date.now(),
      reviewText: this.text.value
    });

    if (!review.reviewText || review.reviewText.trim().length === 0) {
      review.reviewText = '—';
    }

    this.text.setValue('');
    this.api.saveReview(review, this.game.id);
    // this.game.reviews.push(review);
    location.reload();
  }
}
