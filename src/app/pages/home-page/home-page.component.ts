import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public sort: string = '';
  public games: Game[] = [];
  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params["game-search"]){
        this.searchGame('metacritic', params["game-search"]);
      } else{
        this.searchGame('metacritic')
      }
    })
  }


  searchGame(sort: string, search?: string) {
    this.gameService.getGames(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results
    console.log(gameList.results);
    })
  }


}
