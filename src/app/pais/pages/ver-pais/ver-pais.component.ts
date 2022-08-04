import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  public pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((param) => this.paisService.buscarPaisPorCodigo(param.id))
    ).subscribe((pais: Country) => {
      this.pais = pais;
    });
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.paisService.buscarPaisPorCodigo(id).subscribe((pais: Country) => {
    //     console.log(pais);
    //   });
    // });
  }
}
