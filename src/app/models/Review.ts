export class Review {
  author: string;
  id: number;
  rating: number;
  reviewDate: number;
  reviewText: string;

  public constructor(init?: Partial<Review>) {
    Object.assign(this, init);
  }
}
