import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  //Utilizo Reactive Extensions para implementar la funcion de autocompletado en el input de buscar
import { Card } from './Card';
@Injectable({
  providedIn: 'root'
})
export class ScryfallService {
  private apiUrl = 'https://api.scryfall.com';
  
  constructor(private http: HttpClient) { }

  searchCards(query: string): Observable<{data:Card[]}> {
    const url = `${this.apiUrl}/cards/search?q=${query}`;
    return this.http.get<{data:Card[]}>(url);
  }
}
