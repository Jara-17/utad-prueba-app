import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface City {
  name: string;
  visited: string;
}

@Injectable({
  providedIn: 'root',
})
export class CityService {
  //? Creamos un observable para emitir el valor de lectura
  private citiesSubject = new BehaviorSubject<City[]>([]);
  $cities = this.citiesSubject.asObservable();

  addCity(city: City) {
    const currentCities = this.citiesSubject.getValue();
    this.citiesSubject.next([...currentCities, city]);
  }

  removeCity(city: City) {
    const currentCities = this.citiesSubject.getValue();
    const updatedCities = currentCities.filter((c) => c !== city);
    this.citiesSubject.next(updatedCities);
  }
}
