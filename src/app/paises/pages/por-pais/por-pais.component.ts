import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { SearchCountries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  public termino: string=""; 
  public hayError: boolean=false;
  public paises: SearchCountries[]=[];
  public sugerenciaPaises: SearchCountries[]=[];
  public mostrarSuge: boolean=false;
  constructor(private paisS: PaisesService){} 
  buscar(term: string){
    this.hayError=false;
    this.termino=term;
    this.paisS.buscarPais(this.termino).subscribe(
      (pais)=>{
        console.log(pais);
        this.paises=pais;
      },
      error=>{
        console.log(error);
        this.hayError=true;
        this.paises=[];
      }
    );
    console.log(this.termino);
  }
  sugerencias(term:string){
    this.termino=term;
    this.mostrarSuge=true;
    this.paisS.buscarPais(term)
    .subscribe(paises=>{
        this.sugerenciaPaises=paises.splice(0,5);
        console.log(this.sugerenciaPaises);
    })
  }
  buscarSugerido(term: string){
    this.buscar(term);
    this.mostrarSuge=false;
  }
}
