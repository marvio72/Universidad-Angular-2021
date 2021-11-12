import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  nombre: string = 'Marco';
  apellido: string = 'Ruvalcaba';
  private edad: number = 28;

  getEdad() {
    return this.edad;
  }
}
