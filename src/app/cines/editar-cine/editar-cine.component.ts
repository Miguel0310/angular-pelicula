import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {

  @Input({transform: numberAttribute})
  id!: number;

  cine: CineDTO = {id: 1, nombre: 'Acropolis', latitud: -26.253702773905292, longitud: -48.85343486702542}

  guardarCambios(cine: CineCreacionDTO){
    console.log('Editar cine', cine);
  }
}
