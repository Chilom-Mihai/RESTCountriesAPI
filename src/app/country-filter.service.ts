import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryFilterService {

  private regionFilter$: BehaviorSubject<string> = new BehaviorSubject<string>('all');

  setRegionFilter(region: string): void {
    this.regionFilter$.next(region);
  }

  getRegionFilter(): Observable<string> {
    return this.regionFilter$.asObservable();
  }
}
