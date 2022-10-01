import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/dto/register-DTO';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  checkoutForm = this.form.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    usuario: ['', Validators.required],
    contraseña: ['', Validators.required],
  });

  ngOnInit(): void {
    if(!this.service.isLog) return this.service.redirect();
  }
  register() {
    if (!this.checkoutForm.valid) return this.alerterrorValid();
    this.service
      .register(
        <RegisterDTO>this.checkoutForm.value,
        localStorage.getItem('token')!
      )
      .subscribe((data: any) => {
        if (data.status === 406) {
          localStorage.removeItem('token');
          alert(data.message);
        }
        if (data.status === 404) return alert('server error');
        this.alertSuccess();
        this.router.navigate(['/']);
      });
  }
  alerterrorValid(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el administrador, debe llenar todos los campos',
      showConfirmButton: true,
    })
  }
  alertSuccess(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Administrador creado con exito',
      showConfirmButton: true,
    })
  }
}
