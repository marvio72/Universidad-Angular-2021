import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje: string = 'No se ha agregado ninguna persona';
  titulo = 'Doctor';

  agregarPersona() {
    this.mensaje = 'Persona agregada';
  }

  // modificarTitulo(event: Event) {
  //   console.log('Entrando a método modificar titulo');
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }
}
