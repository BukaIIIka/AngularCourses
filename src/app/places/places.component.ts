import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Place, Places } from '../mock/places';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() public places: Place[] = Places;
  @Input() public activePlace!: Place;

  @Output()
  public activePlaceChange: EventEmitter<any> = new  EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setActivePlace(place: Place) {
    this.activePlaceChange.emit(place);
  }

}
