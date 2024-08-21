import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
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
export class ByRegionComponent implements OnInit {
  public countries: Country[] = [];
  public selectedRegion?: Region;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
     this.countries = this.countriesService.cacheStore.byRegion.countries;
     this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public searchByRegion(region: Region): void {
    this.selectedRegion = region;
    if (region !== this.selectedRegion) {
      this.countries = [];
    }
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }

  public getClassCss(region: string): string {
    return region === this.selectedRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
