import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
// import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap((param) => this.paisService.buscarPaisPorCodigo(param.id))
    //   )
    //   .subscribe((pais: Country) => {
    //     this.pais = pais;
    //   });
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.paisService.buscarPaisPorCodigo(id).subscribe((pais: Country) => {
    //     console.log(pais);
    //   });
    // });
  }
}
