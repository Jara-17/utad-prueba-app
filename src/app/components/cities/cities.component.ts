import { Component } from '@angular/core';
import { City, CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities: City[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService.$cities.subscribe((cities) => {
      this.cities = cities;
    });
  }

  onDelete(city: City) {
    this.cityService.removeCity(city);
  }

  onChecked(e: Event, city: City): void {
    city.visited = (e.target as HTMLInputElement).checked
      ? 'Visitada'
      : 'Sin Visitar';
  }
}
