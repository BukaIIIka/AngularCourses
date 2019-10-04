import { Component } from '@angular/core';
import { Place, Places } from './mock/places';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourses';
  public activePlace: Place = Places[0];

  setActivePlace(place: Place) {
    this.activePlace = place;
  }
}

