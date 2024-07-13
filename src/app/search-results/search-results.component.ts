import { Component, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { ScryfallService } from '../scryfall.service';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { Card } from '../Card';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() 
  searchControl: FormControl = new FormControl();
  @Output() 
  cardSelected = new EventEmitter<Card>();
  searchResults: Card[] = [];

  constructor(private scryfallService: ScryfallService) { }

  ngOnInit() {
    this.setupSearch();
  }

  setupSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => {
        if (query.trim() === '') {
          this.searchResults = [];
          return of([]);
        }
        return this.scryfallService.searchCards(query).pipe(
          catchError(error => {
            console.error('Search error:', error);
            this.searchResults = [];
            return of([]);
          })
        );
      })
    ).subscribe((results: any) => {
      if (results && results.data) {
        this.searchResults = results.data.slice(0, 5);
      } else {
        this.searchResults = [];
      }
    });
  }

  selectCard(card: Card) {
    this.cardSelected.emit(card);
    this.searchControl.setValue(card.name, { emitEvent: false });
    this.searchResults = [];
  }
}
