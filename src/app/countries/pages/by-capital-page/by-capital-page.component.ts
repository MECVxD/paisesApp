import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  public term: string = '';

  constructor(private countriesService: CountriesService) {}

  public searchByCapital(term: string): void {
    this.term = term;
    this.countriesService.searchCapital(this.term)
      .subscribe(
        (countries: Country[]) => {
          this.countries = countries;
        });
  }
}
