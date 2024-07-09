import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardSharedService {
  selectedCardId: string | null = null;

  constructor() {}

  setSelectedCardId(cardId: string) {
    this.selectedCardId = cardId;
  }

  getSelectedCardId(): string | null {
    return this.selectedCardId;
  }
}
