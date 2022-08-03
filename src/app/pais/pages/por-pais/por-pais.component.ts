import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  public buscar(): void {
    this.hayError = false;
    this.paisService.buscarPais( this.termino ).subscribe( (paises: Country[]) => {
      this.paises = paises;
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }
}
