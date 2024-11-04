import { NgClass } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent  implements OnInit{
  ngOnInit(): void {
    this.maximoRatingArreglo = Array(this.MaxRatting).fill(0);
  }

  @Input({required: true})
  MaxRatting! : number;

  @Input()
  ratingSeleccionado = 0;
  
  maximoRatingArreglo: any[] = [];
  ratingAnterior = 0;

  manejarMouseEnter(index: number){
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  manejarClick(index: number){
    this.ratingSeleccionado = index + 1;
    this.ratingAnterior = this.ratingSeleccionado;
  }
}
