import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css'],
})
export class ListPeliculasComponent implements OnInit {
  constructor(private service: PeliculasService) {}
  titulo = 'Listado de Peliculas';
  url = 'https://movie-station.onrender.com/peliculas';
  peliculas: PeliculaDTO[] = [];
  ngOnInit(): void {
    this.service.getPeliculas().subscribe((peliculas:any) => {
      this.peliculas = peliculas.GetAll;
    });      
  }
}
