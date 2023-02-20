import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCountries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiURL: string='https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ){}

    get httpParams(){
     return new HttpParams().set('fields','name,capital,flags,population,cca3');
    }


  buscarPais(pais:string): Observable<SearchCountries[]>{
    const url=`${this.apiURL}/name/${pais}?fields=name,capital,flags,population`
    return this.http.get<SearchCountries[]>(url,{params: this.httpParams});
    
  }
  buscarCapital(capital:string): Observable<SearchCountries[]>{
    const url=`${this.apiURL}/capital/${capital}?fields=name,capital,flags,population`
    return this.http.get<SearchCountries[]>(url,{params: this.httpParams});
  }
  buscarporRegion(region:string): Observable<SearchCountries[]>{
    

    const url=`${this.apiURL}/region/${region}`
    return this.http.get<SearchCountries[]>(url,{params: this.httpParams});
  }
  getpaisPorCodigo(termino:string):Observable<SearchCountries>{
    const url=`${this.apiURL}/alpha/${termino}`
    return this.http.get<SearchCountries>(url);
    
  }
  
}
