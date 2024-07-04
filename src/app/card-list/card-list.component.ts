import { Component } from '@angular/core';
import { Card } from './Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  card : Card[] =  [{
    title : "Card title",
    manaCost : "1",
    cardText : "Some quick example text to build on the card title and make up the bulk of the card's content.",
    type : "instant",
    imageUrl : "url"
  }]
}
