import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') public txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) {}

  public buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) { return; }

    this.gifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = '';

    // if (this.gifsService.historial.length >= 11) {
    //   this.gifsService.historial.pop();
    // }
  }

}
