import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public hayError: boolean = false;
  public paises: Country[] = [];
  public termino: string = '';

  constructor(private paisService: PaisService) {}

  public buscar(termino: string): void {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCapital(this.termino).subscribe(
      (paises: Country[]) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
