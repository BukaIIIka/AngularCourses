import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../mock/places';

@Component({
  selector: 'app-about-place',
  templateUrl: './about-place.component.html',
  styleUrls: ['./about-place.component.css']
})
export class AboutPlaceComponent implements OnInit {

  @Input() public activePlaceSocial!: {
    title: string,
    img: string,
    followers: number,
    following: number
  };

  constructor() { }

  ngOnInit() {
  }

}
