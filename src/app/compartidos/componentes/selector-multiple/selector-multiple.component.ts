import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  standalone: true,
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {

  @Input({required: true})
  Selecionados!: SelectorMultipleDTO[];

  @Input({required: true})
  NoSelecionados!: SelectorMultipleDTO[];

  selecionar(elemento: SelectorMultipleDTO, indice: number){
    this.Selecionados.push(elemento);
    this.NoSelecionados.splice(indice, 1);
  }

  deselecionar(elemento: SelectorMultipleDTO, indice: number){
    this.NoSelecionados.push(elemento);
    this.Selecionados.splice(indice, 1);
  }

  selecionarTodo(){
    this.Selecionados.push(...this.NoSelecionados);
    this.NoSelecionados.length = 0;
  }

  deselecionarTodo(){
    this.NoSelecionados.push(...this.Selecionados);
    this.Selecionados.length = 0
  }
}
