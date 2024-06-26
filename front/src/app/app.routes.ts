import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experience', component: ExperienciaComponent },
    { path: 'studies', component: TecnologiasComponent },
    { path: 'projects', component: ProjectsComponent }
];
