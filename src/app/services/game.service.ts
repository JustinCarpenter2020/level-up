import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
    return this.http.get<Game>(`${env.BASE_URL}/games/${id}`)
  }
}
