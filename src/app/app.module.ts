import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MockapiService} from './mockapi.service';

import { ScryfallService } from './scryfall.service';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    AddCardComponent,
    SearchResultsComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ScryfallService,
    MockapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
