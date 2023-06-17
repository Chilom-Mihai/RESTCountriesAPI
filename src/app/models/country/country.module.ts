export interface Countries {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: any;
};

export interface Countries2 {
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: any;
  topLevelDomain: string;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  borders: string[];
}