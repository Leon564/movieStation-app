import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/dto/register-DTO';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    nombre: '',
    email: '',
    usuario: '',
    contraseña: '',
  });

  ngOnInit(): void {}
  register() {
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
        return alert(data.mensaje + ' ' + data.New.usuario);
      });
  }
}
