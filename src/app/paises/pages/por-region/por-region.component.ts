import { Component } from '@angular/core';
import { SearchCountries } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
       margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];   
  regionActiva: string='';
  public termino: string=""; 
  public hayAlgo: boolean=false;
  public paises: SearchCountries[]=[];

  constructor(
    private paisS: PaisesService
  ){}

  activarRegion(region: string){
    this.regionActiva=region;
    console.log(this.regionActiva);
    this.buscar();
  }
  buscar(){
    this.hayAlgo=false;
    
    this.paisS.buscarporRegion(this.regionActiva).subscribe(
      (pais)=>{
        console.log(pais);
        this.paises=pais;
        console.log(pais);
      },
      error=>{
        console.log(error);
        this.hayAlgo=true;
        this.paises=[];
      }
    );
    
  }
  getClaseCSS(region: string): string{
    return (region===this.regionActiva) ? ' btn btn-primary' : ' btn btn-outline-primary'
  }

}









