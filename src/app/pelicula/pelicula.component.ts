import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDTO } from '../dto/pelicula-DTO';
import { PeliculasService } from '../services/peliculas/peliculas.service';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  id: string = '';
  safeSrc: SafeResourceUrl = '';
  pelicula!: PeliculaDTO;
  paramsubscription:Subscription = new Subscription;
  constructor(private route: ActivatedRoute, private service: PeliculasService, private sanitizer: DomSanitizer) { }
  
  
  ngOnInit(): void {
    this.paramsubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.getOne(this.id).subscribe((pelicula:any) => {
        this.pelicula = pelicula.obtener;
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.pelicula.trailer);
      });
    });
  }

}
