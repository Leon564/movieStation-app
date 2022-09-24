import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {
  constructor(private form:FormBuilder, private service: PeliculasService,private router:Router) { }
  
  checkoutForm = this.form.group({
    nombre: '',
    portada: '',
    estreno:  '',
    director: '',
    sinopsis: '',
    genero: '',
    duración: '',
    trailer: '',    
  });

  ngOnInit(): void {
  }
  crear(){
    this.service.create(<PeliculaDTO>this.checkoutForm.value, localStorage.getItem("token")!).subscribe((data:any)=>{
      if (data.status === 406) {
        localStorage.removeItem('token');
        alert(data.message);
      }
      if (data.status === 404) return alert('server error');
      alert(data.mensaje);
      this.router.navigate(['/']);
    });
  }

}
