import { Component, EventEmitter, Output } from '@angular/core';
import { ConvertCostService } from '../convert-cost.service';
import { MockapiService } from '../mockapi.service';
import { CardSharedService } from '../card-shared.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cards : any[] =  [];
  activeCard: any | null = null;

constructor(public convertCostService: ConvertCostService, private MockapiService : MockapiService, private cardSharedService: CardSharedService) { }

ngOnInit(): void {
  this.loadCards();
  }

  loadCards(){
    this.MockapiService.getAllCards().subscribe(
      data => {
        this.cards = data;
      },
      error => {
        console.error('Error loading cards:', error);
      }
    );
  }

  clickedCard(cardId : string){
    this.cardSharedService.setSelectedCardId(cardId);
  }

  handleMouseOver(card: any) {
    this.activeCard = card;
  }

  handleMouseOut() {
    this.activeCard = null;
  }
}
