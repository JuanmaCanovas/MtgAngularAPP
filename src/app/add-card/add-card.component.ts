import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScryfallService } from '../scryfall.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {
  @Output() cardAdded = new EventEmitter<void>();   
  searchControl = new FormControl();
  selectedCard: any;

  constructor(private scryfallService: ScryfallService, private http: HttpClient) { }

  cardSelected(card: any) {
    this.selectedCard = card;
  }

  addCard() {

    

    const query = this.searchControl.value;
    if (query && query.trim() !== '') {
      this.scryfallService.searchCards(query).pipe(
        catchError(error => {
          console.error('Error searching card:', error);
          return of(null);
        })
      ).subscribe((results: any) => {
        if (results && results.data && results.data.length > 0) {
          const card = results.data[0];
          const mockApiUrl = 'https://66848cac56e7503d1ae087e2.mockapi.io/cards/card';

          const cardData = {
            title: card.name,
            manaCost: card.mana_cost,
            cardText: card.oracle_text,
            type: card.type_line,
            imageUrl: card.image_uris.png,
            price : card.prices.usd,
            flavorText : card.flavor_text,
            artist : card.artist,
          };

          this.http.post(mockApiUrl, cardData).subscribe(
            response => {
              console.log('Card added successfully:', response);
              
              this.cardAdded.emit(); //Emito el evento de cardAdded asi se recarga el componente card-list
              this.selectedCard = null;
              
            },
            error => {
              console.error('Error adding card:', error);
            }
          );
        } else {
          console.error('No card found');
        }
      });
    }
  }
}

