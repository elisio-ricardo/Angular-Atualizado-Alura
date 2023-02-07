import { AbstractControl } from "@angular/forms";


export function minusculoValidator(control: AbstractControl) {
  const autoria = control.value as string;

  if (autoria !== autoria?.toLocaleLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}
