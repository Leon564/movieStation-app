import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/app/dto/login-DTO';
import { RegisterDTO } from 'src/app/dto/register-DTO';
const API_URL ='https://movie-station.onrender.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: LoginDTO){
    return this.http.post(`${API_URL}/auth/login`, data);
  }

  register(data: RegisterDTO, key: string){
    const headers = new HttpHeaders().set('Authorization',`Bearer ${key}`);
    return this.http.post(`${API_URL}/administrador/create`, data, {headers});
  }
}
