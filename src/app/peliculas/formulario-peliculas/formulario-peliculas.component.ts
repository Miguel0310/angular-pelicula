import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PeliculasCreacionDTO, PeliculasDTO } from '../peliculas';
import moment from 'moment';

@Component({
  selector: 'app-formulario-peliculas',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent, RouterLink],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit {
  
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: PeliculasDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculasCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['', {validators: [Validators.required]}],
    fechaLanzamiento: new FormControl <Date | null> (null, {validators: [Validators.required]}),
    trailer: '',
    poster: new FormControl<File | string | null>(null)
  });


  archivoSelecionado(file: File){
    this.form.controls.poster.setValue(file);
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const pelicula = this.form.value as PeliculasCreacionDTO;

    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo(): string{

    let campo = this.form.controls.titulo;

    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    return '';
  }

  obtenerErrorFechaLanzamiento(): string{

    let campo = this.form.controls.fechaLanzamiento;

    if(campo.hasError('required')){
      return 'El campo fecha lanzamiento es requerido';
    }

    return '';
  }
}
