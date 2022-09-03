import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  gameRating = 0;
  gameId: string;
  game: Game;
  routeSub: Subscription;
  gameSub: Subscription;

  constructor() {}

  ngOnInit(): void {}
}
