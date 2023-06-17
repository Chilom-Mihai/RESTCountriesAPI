import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {

  countryName!: string | null;
  country: any;
  private subscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CountryService
  ) { }

  ngOnInit(): void {
    this.countryName = this.activatedRoute.snapshot.params['name'];
    this.fetchCountry();
  }

  private fetchCountry(): void {
    this.subscription = this.service.getCountries2().subscribe(
      (countries: any[]) => {
        this.country = countries.find((x: any) => x.name === this.countryName);
      },
      (error: any) => {
        console.error('An error occurred while fetching country details:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
