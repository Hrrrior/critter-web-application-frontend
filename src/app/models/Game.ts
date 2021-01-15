import {Review} from './Review';

export class Game {
  id: number;
  name: string;
  slug: string;
  videoUrl: string;
  description: string;
  imgUrl: string;
  developer: string;
  releaseDate: number;
  rating: number;
  genres: string[] = [];
  platforms: string[] = [];
  reviews: Review[] = [];
}
