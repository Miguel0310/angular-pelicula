import { Component } from '@angular/core';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoPeliculasComponent, MenuComponent, RatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
  clickBoton(){
    alert('Me has clickeado');
  }
}
