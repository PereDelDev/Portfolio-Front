import { Component, inject } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})



export class ExperienciaComponent {

  webService = inject(WebService)
  arrTrabajos: any = []

  async ngOnInit() {
    const respuesta = await this.webService.getTrabajos()
    this.arrTrabajos = respuesta

  }



}
