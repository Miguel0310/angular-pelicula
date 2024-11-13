import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCrecionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

  @Input({transform: numberAttribute})
  id!: number;

  genero: GeneroDTO = {id: 1, nombre: 'Acción'};

  guardarCambios(genero: GeneroCrecionDTO){
    console.log('editando el género', genero);
  }
}
