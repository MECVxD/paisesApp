import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CountriesRoutingModule,
    SharedModule,
  ],
})
export class CountriesModule {}
