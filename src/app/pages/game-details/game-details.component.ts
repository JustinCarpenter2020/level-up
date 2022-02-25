import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  public game: Game = {
    background_image: '',
    name: '',
    released: '',
    metacritic_url: '',
    website: '',
    description: '',
    metacritic: 0,
    genres: [],
    parent_platforms: [],
    publishers: [],
    ratings: [],
    screenshots: [],
    trailers: [],
    id: ''
  };

  public gameId: string = '';

  public routeSub: Subscription | undefined;
  public gameSub: Subscription | undefined;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((p: Params) => {
      this.gameId = p['id']
      this.getGameDetails(this.gameId)
    })
  }


  getGameDetails(gameId: string) {
    this.gameSub =  this.gameService.getGameById(gameId).subscribe((g) => {
      this.game = g;
      console.log(g)
    })
  }


  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
