import { Component, OnInit } from '@angular/core';
import { Card } from '../Card';
import { CardSharedService } from '../card-shared.service';
import { MockapiService } from '../mockapi.service';
import { ConvertCostService } from '../convert-cost.service';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent implements OnInit{

  card : Card | undefined;
  selectedCardId: number = 0;

  constructor(private cardSharedService: CardSharedService, public convertCostService: ConvertCostService, private MockapiService : MockapiService) {}

  ngOnInit(): void {
    this.selectedCardId = this.cardSharedService.getSelectedCardId();
    this.showCard();
  }
  showCard(){
    if (this.selectedCardId !== null){
      this.MockapiService.getCard(this.selectedCardId).subscribe(
        data => {
          this.card = data;
        },
        error =>{
          console.error('Error loading card:', error);
        }
      )
    }
  }

}
