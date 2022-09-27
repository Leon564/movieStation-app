import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PeliculaDTO } from 'src/app/dto/pelicula-DTO';
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
  create(data: PeliculaDTO, token: string) {
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${API_URL}/create`, data, { headers });
  }
  update(data: PeliculaDTO,id:string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${API_URL}/${id}`, data, { headers });
  }
  delete(id: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${API_URL}/${id}`, { headers });
  }
}
