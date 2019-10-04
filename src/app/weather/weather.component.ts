import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../mock/places';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() public activePlaceWeather!: object;

  constructor() { }

  ngOnInit() {
  }

}
