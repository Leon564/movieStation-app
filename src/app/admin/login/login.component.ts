import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/dto/login-DTO';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  checkoutForm = this.form.group({
    usuario: '',
    contraseña: '',
  });

  ngOnInit(): void {}
  login() {
    if (!this.checkoutForm.valid) return alert('formulario invalido');
    this.service
      .login(<LoginDTO>this.checkoutForm.value)
      .subscribe((data: any) => {
        if (data.status == 406) return alert(data.message);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('usuario', this.checkoutForm.value.usuario!);
        this.router.navigate(['/']);
      });
  }
}
