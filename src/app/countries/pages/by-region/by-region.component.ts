import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
// import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  public paises: Country[] = [];
  public regionActiva: string = '';
  public regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];

  // constructor(private paisService: PaisService) {}

  public activarRegion(region: string): void {
    // if (region !== this.regionActiva) {
    //   this.paises = [];
    // }
    // this.regionActiva = region;
    // this.paisService.buscarRegion(region).subscribe((paises: Country[]) => {
    //   this.paises = paises;
    // });
  }

  public getClassCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
