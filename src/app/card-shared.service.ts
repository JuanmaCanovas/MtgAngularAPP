import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardSharedService {
  selectedCardId: number =0;

  constructor() {}

  setSelectedCardId(cardId: number) {
    this.selectedCardId = cardId;
  }

  getSelectedCardId(): number {
    return this.selectedCardId;
  }
}
