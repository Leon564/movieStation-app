import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private form: FormBuilder, private router: Router) {}
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
}
