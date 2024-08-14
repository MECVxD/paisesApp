import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  public termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe((valor)=>{
      this.onDebounce.emit(valor);
    })
  }

  public buscar(): void {
    this.onEnter.emit(this.termino);
  } 
  
  public teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
