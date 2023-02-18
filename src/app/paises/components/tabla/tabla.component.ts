import { Component, Input } from '@angular/core';
import { SearchCountries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
 @Input() paises: SearchCountries[]=[];

  
}
