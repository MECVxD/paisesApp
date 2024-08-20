import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryPageComponent {
  // public mostrarSugerencias: boolean = false;
  public countries: Country[] = [];
  // public paisesSugeridos: Country[] = [];
  public term: string = '';

  constructor(private countriesService: CountriesService) {}

  public searchByCountry(term: string): void {
    this.term = term;
    this.countriesService.searchCountry(this.term).subscribe(
      (countries: Country[]) => {
        this.countries = countries;
        // this.mostrarSugerencias = false;
      }
    );
  }

  public sugerencias(termino: string): void {
    // this.hayError = false;
    // this.termino = termino;
    // this.mostrarSugerencias = true;
    // this.paisService.buscarPais(termino).subscribe(
    //   (paises: Country[]) => {
    //     this.paisesSugeridos = paises.splice(0, 5);
    //   },
    //   (err) => {
    //     this.paisesSugeridos = [];
    //   }
    // );
  }

  // public buscarSugerido(termino: string): void {
  //   this.buscar(termino);
  //   this.mostrarSugerencias = false;
  // }
}
