import { Component, inject } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {


  webService = inject(WebService)
  arrStudies: any = []

  async ngOnInit() {
    const respuesta = await this.webService.getStudies()
    console.log(respuesta)
    this.arrStudies = respuesta
  }
}
