import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaDTO } from '../dto/pelicula-DTO';
const API_URL ='https://movie-station.onrender.com/peliculas';
@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  

  getPeliculas() {
    return this.http.get<PeliculaDTO[]>(API_URL);
  }
  getOne(id: string) {
    return this.http.get<PeliculaDTO>(`${API_URL}/${id}`);
  }
}
