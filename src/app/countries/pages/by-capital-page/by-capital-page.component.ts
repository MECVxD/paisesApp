import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public hayError: boolean = false;
  public countries: Country[] = [];
  public termino: string = '';

  constructor(private countriesService: CountriesService) {}

  public searchByCapital(term: string): void {
    console.log('Desde ByCapitalPage');
    console.log({term});
    this.termino = term;
    this.hayError = false;
    this.countriesService.searchCapital(this.termino)
      .subscribe(
        (countries: Country[]) => {
          this.countries = countries;
        },
        (err) => {
          this.hayError = true;
          this.countries = [];
        }
      );
  }
}
