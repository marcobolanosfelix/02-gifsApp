import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') public txtBuscar!: ElementRef<HTMLInputElement>;

  public buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;
    console.log( valor );
    this.txtBuscar.nativeElement.value = '';
  }

}
