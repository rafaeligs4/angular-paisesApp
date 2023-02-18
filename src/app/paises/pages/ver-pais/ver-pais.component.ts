import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private servi:PaisesService
    ){}
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({id})=>{
        console.log(id);
        this.servi.getpaisPorCodigo(id)
        .subscribe(pais=>{
          console.log(pais);
        })
      });
      }
}
