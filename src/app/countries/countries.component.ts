import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Countries } from '../models/country/country.module';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {

  countries: Countries[] = [];
  filteredCountries: Countries[] = [];
  countriesUrl = 'assets/data.json';
  region!: string;
  private subscription: Subscription | undefined;
  searchQuery: string = '';

  constructor(private http: HttpClient, private countriesService: CountryService) { }



  ngOnInit(): void {
    this.fetchCountries();
  }

  filterCountriesByRegion(): void {
    if (this.region === 'all') {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country.region.toLowerCase() === this.region.toLowerCase()
      );
    }
  }

  fetchCountries(): void {
    this.subscription = this.countriesService.getCountries2().subscribe(response => {
      this.countries = response;
      this.filteredCountries = response;
    });
  }

  filterCountriesByName(): void {
    this.filteredCountries = this.countries.filter(country => {
      return country.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
