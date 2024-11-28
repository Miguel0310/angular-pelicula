import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPeliculas';

@Component({
  selector: 'app-filtro-peliculas',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit{
  
  ngOnInit(): void {
    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas);
    });
  }

  buscarPeliculas(valores: FiltroPeliculas){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== 1);
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue({titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false})
  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  });

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Acción'},
    {id: 3, nombre: 'Comedia'},
  ]


  peliculasOriginal = [
    {
      titulo: "Spider-man",
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      generos: [1,2,3],
      enCines: true,
      proximosEstrenos: false,
      poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/52/Spider-Man.png/250px-Spider-Man.png"
    },
    {
      titulo: "Mohana",
      fechaLanzamiento: new Date("2016-06-03"),
      precio: 300.50,
      generos: [3],
      enCines: false,
      proximosEstrenos: true,
      poster: "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg"
    },
    {
      titulo: "Oppenheimer ",
      fechaLanzamiento: new Date("2016-06-03"),
      precio: 300.50,
      generos: [2],
      enCines: false,
      proximosEstrenos: false,
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg"
    },
    {
      titulo: "Inside Out 2",
      fechaLanzamiento: new Date("2016-06-03"),
      precio: 300.50,
      generos: [1],
      enCines: true,
      proximosEstrenos: false,
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg"
    },
    {
      titulo: "Deadpool & Wolverine",
      fechaLanzamiento: new Date("2016-06-03"),
      precio: 300.50,
      generos: [],
      enCines: true,
      proximosEstrenos: false,
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg"
    },
    {
      titulo: "Despicable Me 4",
      fechaLanzamiento: new Date("2016-06-03"),
      precio: 300.50,
      generos: [1,2],
      enCines: false,
      proximosEstrenos: false,
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Despicable_Me_4_Theatrical_Release_Poster.jpeg/220px-Despicable_Me_4_Theatrical_Release_Poster.jpeg"
    },
    {
      titulo: "Bad Boys: Ride or Die",
      fechaLanzamiento: new Date("2016-06-03"),
      precio: 300.50,
      generos: [1,3],
      enCines: true,
      proximosEstrenos: false,
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg/220px-Bad_Boys_Ride_or_Die_%282024%29_poster.jpg"
    },
  ];

  peliculas = this.peliculasOriginal;

}
