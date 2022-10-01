import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css'],
})
export class ListPeliculasComponent implements OnInit {
  constructor(private service: PeliculasService, private auth:AuthService) {}
  titulo = 'Listado de Peliculas';
  url = 'https://movie-station.onrender.com/peliculas';
  peliculas: PeliculaDTO[] = [];
  ngOnInit(): void {
    if(!this.auth.isLog) return this.auth.redirect();
    this.service.getPeliculas().subscribe((peliculas:any) => {
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
      }
    });
  }
}
