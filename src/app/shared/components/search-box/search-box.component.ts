import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onValue: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  public termino: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  public emitValue( value: string ): void {
    this.onValue.emit( value );
  }

  public teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
