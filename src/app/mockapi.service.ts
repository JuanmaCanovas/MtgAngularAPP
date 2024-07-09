import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './Card'

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  private mockApiUrl = 'https://66848cac56e7503d1ae087e2.mockapi.io/cards/card';

  constructor(private http: HttpClient) { }

  getAllCards() {
    return this.http.get<any[]>(this.mockApiUrl);
  }

  getCard(cardID:string){
    return this.http.get<Card>(`${this.mockApiUrl}/${cardID}`);
  }
}
