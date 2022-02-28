import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, Subscription } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models/game';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }


  getGames(ordering: string, search?: string): Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering', ordering);

    if(search){
    params = new HttpParams().set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params: params});
  }


  getGameById(id: string): Observable<Game>{
    const gameInfoRequest = this.http.get<Game>(`${env.BASE_URL}/games/${id}`);
    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);
    const gameTrailersRequest = this.http.get(
      `${env.BASE_URL}/games/${id}/movies`
    );
    return forkJoin({ gameInfoRequest, gameScreenshotsRequest, gameTrailersRequest}).pipe(map((resp: any) => {
      return {
        ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailerRequest']?.results
      }
    }));
  }
}
