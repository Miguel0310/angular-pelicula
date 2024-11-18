import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetaMayuscula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valor = <string>control.value;

        if(!valor) return null;
        if(valor.length === 0) return null;
        
        const primeraLetra = valor[0];

        if(primeraLetra !== primeraLetra.toUpperCase()){
            return {
                primeraLetaMayuscula: {
                    mensaje: 'Primera letra debe ser mayúscula'
                }
            }
        }
        return null;
    }
}

export function noInicioEspacio(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {

        const esSoloEspacio = control.value as string;

        const comienzaConEspacio = esSoloEspacio.startsWith(' ');

        if(comienzaConEspacio){
        return {soloEspacios: {
            mensaje: 'No es posible iniciar con espacio'       
            }
        };
    }
    return null;
    };
}

export function fechaNoPuedeSerFutura() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const fechaEscogidaPorElUsuario = new Date(control.value);
        const hoy = new Date();

        if(fechaEscogidaPorElUsuario > hoy){
            return {
                futuro: {
                    mensaje: 'La fecha no puede ser del futuro'
                }
            }
        }
        return null;
    }
}