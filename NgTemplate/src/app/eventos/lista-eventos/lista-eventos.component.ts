import { Component, OnInit } from '@angular/core';
import { SeoModel, SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  // contador: number = 0;
  // textClass: string = "";

  constructor(seoService: SeoService) {
    let seoModel: SeoModel = <SeoModel>{
        title: 'Próximos Eventos',
        description: 'Lista dos próimos eventos técnicos no Brasil',
        robots:'Index,Follow',
        keywords: 'eventos,workshops,encontros,congressos'
    };

    seoService.setSeoData(seoModel);
   }

  ngOnInit() {
  }

  // clickContador(){
  //   this.contador++;
  // }

}
