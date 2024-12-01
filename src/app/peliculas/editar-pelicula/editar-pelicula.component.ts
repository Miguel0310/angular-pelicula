import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculasCreacionDTO, PeliculasDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculasDTO = {id: 1, titulo: 'Spider-Man', trailer: 'ABC',fechaLanzamiento: new Date('2018-07-25'),poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/52/Spider-Man.png/250px-Spider-Man.png'}

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('Editando Película', pelicula);
  }
}
