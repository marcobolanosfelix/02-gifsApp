import { Component } from '@angular/core';

import { GifsService } from './../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  
  constructor(
    private gifsService: GifsService
  ) { }

  public get historial(): string[] {
    return this.gifsService.historial;
  }

  public buscar( termino: string ) {
    this.gifsService.buscarGifs( termino );
  }


}
