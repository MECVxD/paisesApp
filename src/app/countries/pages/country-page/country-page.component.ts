import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) =>
          this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe((country) => {
        if(!country) return this.router.navigateByUrl('');
        return this.country = country;
      });
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countriesService
    //       .searchCountryByAlphaCode(id)
    //       .subscribe((country: Country[]) => {
    //         console.log(country);
    //       });
    //   });
  }
}
