import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { noInicioEspacio, primeraLetaMayuscula } from '../../compartidos/funciones/validaciones';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  router = inject(Router);

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetaMayuscula(), noInicioEspacio()]}]
  })

  obtenerErrorCampoNombre(): string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(nombre.hasError('primeraLetaMayuscula')){
      return nombre.getError('primeraLetaMayuscula').mensaje;
    }

    if(nombre.hasError('soloEspacios')){
      return nombre.getError('soloEspacios').mensaje
    }

    return '';
  }

  guardarCambios(){
    // this.router.navigate(['./generos']);
    console.log(this.form.value);
  }
}
