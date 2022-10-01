import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { AuthService } from '../services/auth/auth.service';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})

export class CrearPeliculaComponent implements OnInit {
  constructor(private form:FormBuilder, private service: PeliculasService,private auth:AuthService,private router:Router) { }
  
  checkoutForm = this.form.group({
    nombre: ['',Validators.required],
    portada: ['',Validators.required],
    estreno:  ['',Validators.required],
    director: ['',Validators.required],
    sinopsis: ['',Validators.required],
    genero: ['',Validators.required],
    duración: ['',Validators.required],
    trailer: ['',Validators.required],    
  });

  ngOnInit(): void {
  }
  crear(){
    if(!this.checkoutForm.valid) return this.alerterrorValid();
    this.service.create(<PeliculaDTO>this.checkoutForm.value, localStorage.getItem("token")!).subscribe((data:any)=>{
      if (data.status === 406) {
        this.auth.logOut();
        alert('error');
      }
      if (data.status === 404) return this.alert404();
      this.alertcreate();
      this.router.navigate(['/']);
    },(error:any)=>{
      this.alertnologin();
      this.auth.logOut();
    });
  }
  alertnologin(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Inicio de sesion requerido para esta operación',
      showConfirmButton: true,
    })
  }
  alertcreate(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula creada correctamente',
      showConfirmButton: true,
    })
  }
  alert404(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'El servidor no responde',
      showConfirmButton: true,
    })
  }
  alerterrorValid(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear la pelicula, debe llenar todos los campos',
      showConfirmButton: true,
    })
  }
}
