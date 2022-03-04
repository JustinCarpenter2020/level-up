import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import {MatDialog} from '@angular/material/dialog';
import { ScreenShotDialogComponent } from '../screen-shot-dialog/screen-shot-dialog.component';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.css']
})
export class GameTabsComponent implements OnInit {
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
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {

  }

  toggleDialog(index: number){
    const dialogRef = this.dialog.open(ScreenShotDialogComponent, {
      width: '1000px',
      data: {
        name: this.game.name,
        screenshots: this.game.screenshots,
        index: index
    }
    });
  }

}
