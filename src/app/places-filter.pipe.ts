import { Pipe, PipeTransform } from '@angular/core';
import { Place } from './mock/places';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  transform(places: Place[], searchType: string): Place[] {
    if (searchType.toLowerCase() === 'all') {
      return places;
    } else {
      return places.filter((place: Place) => {
        return `${place.type}`.toLowerCase().includes(searchType.toLowerCase());
      });
    }
  }

}
