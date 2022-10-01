import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: PeliculasService
  ) {}
  peliculas: PeliculaDTO[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.service.getByName(params['name']).subscribe((peliculas:any) => {
        console.log(peliculas);
        this.peliculas = peliculas.pelicula;
      });
    });
  }
}
