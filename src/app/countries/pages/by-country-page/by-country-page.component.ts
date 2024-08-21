import { Component, OnInit } from '@angular/core';

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
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public term: string = '';
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  public searchByCountry(term: string): void {
    this.term = term;
    this.countriesService
      .searchCountry(this.term)
      .subscribe((countries: Country[]) => {
        this.countries = countries;
      });
  }
}
