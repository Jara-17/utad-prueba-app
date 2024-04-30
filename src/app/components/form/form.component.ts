import { Component } from '@angular/core';
import { City, CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private cityService: CityService) {}

  cityText: string = '';

  onSubmit() {
    const city: City = {
      name: this.cityText,
      visited: 'Sin Visitar',
    };

    this.cityService.addCity(city);

    this.cityText = ''; // Limpiar el campo después de agregar la ciudad
  }
}
