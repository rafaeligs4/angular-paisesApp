import { Component } from '@angular/core';
import { SearchCountries } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  public termino: string=""; 
  public hayError: boolean=false;
  public paises: SearchCountries[]=[];
  constructor(private paisS: PaisesService){} 
  buscarCapital(term: string){
    this.hayError=false;
    this.termino=term;
    this.paisS.buscarCapital(this.termino).subscribe(
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
    console.log(term);
  }
}
