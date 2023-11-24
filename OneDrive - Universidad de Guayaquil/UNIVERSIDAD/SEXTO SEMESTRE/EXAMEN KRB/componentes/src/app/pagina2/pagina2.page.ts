import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: 'pagina2.page.html',
  styleUrls: ['pagina2.page.scss'],
})
export class Pagina2Page {
  fechaNacimiento: string = '';

  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/']);
  }
}
