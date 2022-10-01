import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { AuthService } from '../services/auth/auth.service';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import Swal from 'sweetalert2';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  paramsubscription: Subscription = new Subscription();
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private form: FormBuilder,
    private service: PeliculasService,
    private auth: AuthService,
    private router: Router
  ) {
    if (!this.auth.isLog) this.router.navigate(['/auth/login']);
  }

  checkoutForm = this.form.group({
    nombre: ['', Validators.required],
    portada: ['', Validators.required],
    estreno: ['', Validators.required],
    director: ['', Validators.required],
    sinopsis: ['', Validators.required],
    genero: ['', Validators.required],
    duración: ['', Validators.required],
    trailer: ['', Validators.required],
  });

  ngOnInit(): void {
    if(!this.auth.isLog) return this.auth.redirect();
    this.paramsubscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getOne(this.id).subscribe(
        (pelicula: any) => {
          this.checkoutForm.patchValue(pelicula.obtener);
        },
        (error: any) => {
          this.alertpelicula();
          this.router.navigate(['/']);
        }
      );
    });
  }

  editar() {   
    if(!this.checkoutForm.valid) return this.alerterrorValid();
    this.service
      .update(
        <PeliculaDTO>this.checkoutForm.value,
        this.id,
        localStorage.getItem('token')!
      )
      .subscribe(
        (data: any) => {         
          if (data.status === 404) return this.alert404();
          this.alertconfirm();
          this.router.navigate(['/']);
        },
        (error: any) => {
          if (error.status === 401) {
            this.alertsesion();
            return this.auth.logOut();            
          }
          return this.alerterror();
        }
      )
  }
  alertpelicula(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'La pelicula no fue encontrada',
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
  alertconfirm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pelicula editada correctamente',
      showConfirmButton: true,
    })
  }
  alertsesion(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Su sesion ha expirado, ingrese sesion de nuevo',
      showConfirmButton: true,
    })
  }
  alerterror(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al editar la pelicula',
      showConfirmButton: true,
    })
  }
  alerterrorValid(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al editar la pelicula, debe llenar todos los campos',
      showConfirmButton: true,
    })
  }

}
