import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: "Spider-man",
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/52/Spider-Man.png/250px-Spider-Man.png"
        },
        {
          titulo: "Mohana",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg"
        },
        {
          titulo: "Oppenheimer ",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg"
        },
        {
          titulo: "Inside Out 2",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg"
        },
        {
          titulo: "Deadpool & Wolverine",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg"
        },
        {
          titulo: "Despicable Me 4",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Despicable_Me_4_Theatrical_Release_Poster.jpeg/220px-Despicable_Me_4_Theatrical_Release_Poster.jpeg"
        },
        {
          titulo: "Bad Boys: Ride or Die",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg/220px-Bad_Boys_Ride_or_Die_%282024%29_poster.jpg"
        },
      ]
    },2000);

    setTimeout(() => {
      this.peliculasProximosEstrenos = [
        {
          titulo: "Spider-man",
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/52/Spider-Man.png/250px-Spider-Man.png"
        },
        {
          titulo: "Mohana",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/pt/4/46/Moana_movie_poster_p_2016.jpg"
        },
        {
          titulo: "Oppenheimer ",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg"
        },
        {
          titulo: "Inside Out 2",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg"
        },
        {
          titulo: "Deadpool & Wolverine",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg"
        },
        {
          titulo: "Despicable Me 4",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Despicable_Me_4_Theatrical_Release_Poster.jpeg/220px-Despicable_Me_4_Theatrical_Release_Poster.jpeg"
        },
        {
          titulo: "Bad Boys: Ride or Die",
          fechaLanzamiento: new Date("2016-06-03"),
          precio: 300.50,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg/220px-Bad_Boys_Ride_or_Die_%282024%29_poster.jpg"
        },
      ]
    },2000);
  };

  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
}
