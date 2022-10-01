import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/dto/login-DTO';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

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
    usuario: ['', Validators.required],
    contraseña: ['', Validators.required]
  });

  ngOnInit(): void {
    if(this.service.isLog){
      this.router.navigate(['/pelicula/lista']).then(() => {
        window.location.reload();
      });
    }
  }

  login(){
    if(!this.checkoutForm.valid) return this.errorNulldata();
    this.service.login(<LoginDTO>this.checkoutForm.value).subscribe((data:any)=>{
      if(data.status == 406 || !data.access_token) return this.erroralert();        
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('usuario', this.checkoutForm.value.usuario!);
      this.router.navigate(['/pelicula/lista']).then(() => {
        window.location.reload();
      });      
    });
    
  }
  erroralert(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Usuario o contraseña invalidos',
      showConfirmButton: true,
    })
  }
  errorNulldata(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Debe llenar todos los campos',
      showConfirmButton: true,
    })
  }
  
}
