import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Game} from '../models/Game';
import {Review} from '../models/Review';
import {Genre} from '../models/Genre';
import {Platform} from '../models/Platform';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  gamesUrl = 'api/games';
  reviewsUrl = 'api/reviews';
  genresUrl = 'api/genres';
  platformsUrl = 'api/platforms';
  igdbUrl = 'api/igdb';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  saveGame(name: string): Observable<Game> {
    return this.http.post<Game>(this.igdbUrl, name, this.httpOptions);
  }

  deleteGame(id: number): void {
    this.http.delete(`${this.gamesUrl}/${id}`, this.httpOptions).subscribe();
  }

  getReviews(gameID: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.reviewsUrl}/${gameID}`);
  }

  saveReview(review: Review, gameId: number): void {
    this.http.post<Review>(`${this.reviewsUrl}/${gameId}`, review, this.httpOptions).subscribe();
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  }

  getPlatforms(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.platformsUrl);
  }
}
