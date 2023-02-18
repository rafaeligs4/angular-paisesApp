import { HttpClient } from '@angular/common/http';
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
  ) { }
  buscarPais(pais:string): Observable<SearchCountries[]>{
    const url=`${this.apiURL}/name/${pais}`
    return this.http.get<SearchCountries[]>(url);
    
  }
  buscarCapital(capital:string): Observable<SearchCountries[]>{
    const url=`${this.apiURL}/capital/${capital}`
    return this.http.get<SearchCountries[]>(url);
  }
  getpaisPorCodigo(termino:string):Observable<SearchCountries>{
    const url=`${this.apiURL}/alpha/${termino}`
    return this.http.get<SearchCountries>(url);
    
  }
  
}
