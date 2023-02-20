import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import {switchMap,tap} from 'rxjs/operators'
import { SearchCountries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: SearchCountries;

  constructor(
    private activatedRoute:ActivatedRoute,
    private servi:PaisesService
    ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.servi.getpaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe(pais=>{
      console.log(typeof pais)
      this.pais=pais[0]}
    );
      // this.activatedRoute.params.subscribe(({id})=>{
      //   console.log(id);
      //   this.servi.getpaisPorCodigo(id)
      //   .subscribe(pais=>{
      //     console.log(pais);
      //   })
      // });
      
      }
}
