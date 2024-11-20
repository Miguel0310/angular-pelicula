import { Component, EventEmitter, inject, Input, model, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDTO } from '../cines';
import { CrearCineComponent } from '../crear-cine/crear-cine.component';

@Component({
  selector: 'app-formulario-cines',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css'
})
export class FormularioCinesComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    } 
  }

  @Input()
  modelo?: CineCreacionDTO;

  @Output()
  posteoFormulario = new EventEmitter<CineCreacionDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required]}]
  });

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return 'El nombre no puede ser vacio';
    }
    return '';
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const cine = this.form.value as CineCreacionDTO;
    this.posteoFormulario.emit(cine);
  }
}
