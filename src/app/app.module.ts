import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPeliculasComponent,
    PeliculaComponent,
    LoginComponent,
    RegisterComponent,
    CrearPeliculaComponent,
    EditarPeliculaComponent,
    NavbarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
