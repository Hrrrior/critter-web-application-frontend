import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../models/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;

  constructor() {
  }

  ngOnInit(): void {
  }

  public dateHuman(): string {
    return new Date(this.review.reviewDate).toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  }
}
