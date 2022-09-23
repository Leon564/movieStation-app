import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  { path: '', component: ListPeliculasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
