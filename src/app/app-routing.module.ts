import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pelicula/list', component: ListPeliculasComponent },
  { path: 'pelicula/buscar', component: BuscadorComponent },
  { path: 'pelicula/crear', component: CrearPeliculaComponent },
  { path: 'pelicula/editar/:id', component: EditarPeliculaComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
