import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  public hayError: boolean = false;
  public mostrarSugerencias: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public termino: string = '';
  
  constructor(private paisService: PaisService) { }

  public buscar(termino: string): void {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe((paises: Country[]) => {
      this.paises = paises;
      this.mostrarSugerencias = false;
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  public sugerencias(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe((paises: Country[]) => {
      this.paisesSugeridos = paises.splice(0, 5);
    }, (err) => {
      this.paisesSugeridos = [];
    });
  }

  public buscarSugerido(termino: string): void {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
