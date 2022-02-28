import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Game = {
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToDetails(id: string): void{
    this.router.navigate(['game', id])
  }

}
