import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  { path: '', component: ListPeliculasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
