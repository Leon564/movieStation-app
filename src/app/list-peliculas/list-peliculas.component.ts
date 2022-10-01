import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css'],
})
export class ListPeliculasComponent implements OnInit {
  constructor(private service: PeliculasService, private auth:AuthService) {}
  titulo = 'Listado de Peliculas';
  url = 'https://movie-station.onrender.com/peliculas';
  peliculas: PeliculaDTO[] = [];
  ngOnInit(): void {
    if(!this.auth.isLog) return this.auth.redirect();
    this.service.getPeliculas().subscribe((peliculas:any) => {
      this.peliculas = peliculas.GetAll;
    });      
  }
eliminar(id: string) {
    //question de sweetalert para confirmar la eliminacion
    Swal.fire({
      title: '¿Estas seguro de eliminar la pelicula?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(id, localStorage.getItem('token')!).subscribe({
          complete() {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Pelicula eliminada con exito',
              showConfirmButton: true,
            }).then(() => {
              window.location.reload();
            });
          },
          error(error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error al eliminar la pelicula',
              showConfirmButton: true,
            })
          }
        });
      }
    }
    )
  }

}
