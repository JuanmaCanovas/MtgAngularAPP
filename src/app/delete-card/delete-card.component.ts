import { Component, Input, Output } from '@angular/core';
import { MockapiService } from '../mockapi.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrl: './delete-card.component.scss'
})
export class DeleteCardComponent {
  @Input() 
  cardId : number = 0;
  @Output() 
  cardDeleted = new EventEmitter<void>();

  constructor(private mockapiService: MockapiService) { }

  sendCardToDelete(cardId : number): void{
    this.mockapiService.deleteCard(cardId).subscribe(
      ()=> {
        console.log("Card deleted");
        this.cardDeleted.emit()
      }
    );
    
  }
}
