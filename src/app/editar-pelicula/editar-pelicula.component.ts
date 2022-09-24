import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';

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
    private router: Router
  ) {}

  checkoutForm = this.form.group({
    nombre: '',
    portada: '',
    estreno: '',
    director: '',
    sinopsis: '',
    genero: '',
    duración: '',
    trailer: '',
  });

  ngOnInit(): void {
    //get id from url
    this.paramsubscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getOne(this.id).subscribe((pelicula: any) => {
        this.checkoutForm.patchValue(pelicula.obtener);
      }, (error: any) => {
        alert("Pelicula no encontrada");
        this.router.navigate(['/']);
      });
    });
  }

  crear() {
    this.service
      .update(
        <PeliculaDTO>this.checkoutForm.value,
        this.id,
        localStorage.getItem('token')!
      )
      .subscribe((data: any) => {
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
