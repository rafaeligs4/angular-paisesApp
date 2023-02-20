import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit{
 
@Output() onEnter: EventEmitter<string>=new EventEmitter();
@Output() onDebounce: EventEmitter<string>=new EventEmitter();
@Input()  placeholder: string="";
  debouncer: Subject<string>=new Subject();

  public termino: string="";

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
      console.log('debouncer: ',valor);
    });
  }
  buscar(){
      this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
    this.debouncer.next(this.termino);   
  }
}
