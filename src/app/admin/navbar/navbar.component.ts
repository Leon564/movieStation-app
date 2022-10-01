import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private form: FormBuilder, private router: Router, private auth:AuthService) {}
  Buscar = 'Buscar';
  ngOnInit(): void {}
  checkoutForm = this.form.group({
    search: '',
  });
  buscarPelicula() {
    console.log(this.checkoutForm.value);
    this.Buscar = this.checkoutForm.value.search!;
    this.router.navigate(['pelicula/buscar'], {
      queryParams: { name: this.Buscar },
    });
  }
  logOut(){
    this.auth.logOut();
    console.log("Sesion cerrada");
  }
  isLog:boolean = this.auth.isLog;
  
}
