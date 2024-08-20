import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  public countries: Country[] = [];
  public regionActiva: string = '';
  public regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  public activarRegion(region: string): void {
    if (region !== this.regionActiva) {
      this.countries = [];
    }
    this.regionActiva = region;
    this.countriesService.searchRegion(region).subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }

  public getClassCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
