import { Component } from '@angular/core';
import { PeliculasCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSelecionado: SelectorMultipleDTO[] = [];
  
  generosNoSelecionado: SelectorMultipleDTO[] = [
      {llave: 1, valor: 'Drama'},
      {llave: 2, valor: 'Accion'},
      {llave: 2, valor: 'comedia'}
  ];

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('Creando Película ', pelicula);
  }


}
