import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router) {}


  email: string = '';
  pass: string = '';
  // loginExitoso: Boolean = false;

  login(){

    const CorreoValido = 'CorreoPrueba123@gmail.com';
    const PassValida = '1234';

    if(this.email === "" || this.pass === ''){
      console.log("Por favor rellene los datos")
      alert("Por favor rellene los datos")
    }
    else{
        if(this.email === CorreoValido && this.pass == PassValida){
      console.log("Inicio de sesion exitoso")
      alert("Inicio de sesion exitoso")
      this.router.navigate(['/Bienvenida'],{queryParams: {email: this.email}});
    }
    else{
      console.log("Correo o contraseña erroneo")
      alert("Correo o contraseña erroneo")
    }
  }

  }

}
