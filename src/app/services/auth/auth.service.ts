import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/app/dto/login-DTO';
const API_URL ='https://movie-station.onrender.com/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: LoginDTO){
    return this.http.post(`${API_URL}/login`, data);
  }
}
