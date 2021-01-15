import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../models/Review';
import {ApiService} from '../../services/api.service';
import {Game} from '../../models/Game';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() game: Game;
  // reviews: Review[];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    // this.api.getReviews(this.game.id).subscribe(reviews => this.reviews = reviews);
  }
}
