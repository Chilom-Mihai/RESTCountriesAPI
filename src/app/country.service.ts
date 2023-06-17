import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Countries2 } from '../app/models/country/country.module';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: Countries2[] = [];

  constructor(private http: HttpClient) { }

  getCountries2(): Observable<Countries2[]> {
    return this.http.get<Countries2[]>('assets/data.json').pipe(
      tap((countries: Countries2[]) => {
        this.countries = countries;
      })
    );
  }

}
