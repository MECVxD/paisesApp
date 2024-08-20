import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Country } from '../interfaces/country.interface';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,cca3,flags,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) {}

  public searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError(() => of([])));
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError(() => of([])));
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map((countries: Country[]) => countries.length > 0 ? countries[0]: null),
        catchError(()=>of(null)));
  }

  public searchRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(catchError(() => of([])));;
  }
}
