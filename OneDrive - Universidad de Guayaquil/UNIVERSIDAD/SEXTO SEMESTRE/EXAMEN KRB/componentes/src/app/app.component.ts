import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  nombre: string = '';
  email: string = '';
  fechaNacimiento: string = '';

  constructor(private router: Router) {}

  navigateToPage1() {
    this.router.navigate(['/']);
  }

  navigateToPage2() {
    this.router.navigate(['/pagina2']);
  }

  login() {
    // Puedes agregar lógica de autenticación o simplemente mostrar la información ingresada
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
  }
}
