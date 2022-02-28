import { Component, Inject, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-screen-shot-dialog',
  templateUrl: './screen-shot-dialog.component.html',
  styleUrls: ['./screen-shot-dialog.component.css']
})
export class ScreenShotDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  changeImage(incrementer: string){
    if(incrementer == "decrement" && this.data.index > 0){
      this.data.index--
    }
    if(incrementer == "increment" && this.data.index < (this.data.screenshots.length -1)){
      this.data.index++
    }
  }

}
