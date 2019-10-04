import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places/places.component';
import { WeatherComponent } from './weather/weather.component';
import { AboutPlaceComponent } from './about-place/about-place.component';
import {MatCardModule, MatListModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    WeatherComponent,
    AboutPlaceComponent
  ],
  exports: [
    CommonModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
