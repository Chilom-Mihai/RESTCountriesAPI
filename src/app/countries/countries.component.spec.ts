import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter countries by region', () => {
    // const text = data;
    // console.log(text)
    // component.countries = data[0]
    component.countries = [
      { name: 'Country 1', population: 1000000, region: 'Europe', capital: 'Capital 1', flags: {} },
      { name: 'Country 2', population: 2000000, region: 'Asia', capital: 'Capital 2', flags: {} },
      { name: 'Country 3', population: 3000000, region: 'Europe', capital: 'Capital 3', flags: {} }
    ];

    component.region = 'Europe';
    component.filterCountriesByRegion();

    expect(component.filteredCountries.length).toBe(2);
    expect(component.filteredCountries[0].name).toBe('Country 1');
    expect(component.filteredCountries[1].name).toBe('Country 3');

    component.region = 'Asia';
    component.filterCountriesByRegion();

    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].name).toBe('Country 2');

    component.region = 'all';
    component.filterCountriesByRegion();

    expect(component.filteredCountries.length).toBe(3);
  });

  it('should filter countries by name', () => {
    component.countries = [
      { name: 'Country 1', population: 1000000, region: 'Europe', capital: 'Capital 1', flags: {} },
      { name: 'Country 2', population: 2000000, region: 'Asia', capital: 'Capital 2', flags: {} },
      { name: 'Country 3', population: 3000000, region: 'Europe', capital: 'Capital 3', flags: {} }
    ];

    component.searchQuery = 'country';
    component.filterCountriesByName();

    expect(component.filteredCountries.length).toBe(3);

    component.searchQuery = 'country 1';
    component.filterCountriesByName();

    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].name).toBe('Country 1');

    component.searchQuery = 'non-existent';
    component.filterCountriesByName();

    expect(component.filteredCountries.length).toBe(0);
  });
});
