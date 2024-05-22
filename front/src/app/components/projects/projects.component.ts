import { Component, inject } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  webService = inject(WebService)
  arrProjects: any = []
  async ngOnInit() {
    const respuesta = await this.webService.getProjects()
    console.log(respuesta)
    this.arrProjects = respuesta

  }

}