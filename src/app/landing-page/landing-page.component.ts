import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private service: PeliculasService) {}
  titulo = 'Listado de Peliculas';
  url = 'https://movie-station.onrender.com/peliculas';
  peliculas: PeliculaDTO[] = [];
  ngOnInit(): void {
    this.service.getPeliculas().subscribe((peliculas: any) => {
      this.peliculas = peliculas.GetAll;
    });
  }
  eliminar(id: string) {
    this.service.delete(id, localStorage.getItem('token')!).subscribe({
      complete() {
        location.reload();
      },
      error(error) {
        alert('error');
      },
    });
  }
}
