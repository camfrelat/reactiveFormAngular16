import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  //contains an @ and a .
  const emailRegex = RegExp(/\S+@\S+.\S+/);
  const valid = emailRegex.test(control.value);

  const errors = {
    mail: {
      rules: "L'email doit contenir une @ et un .",
    },
  };
  return !valid ? errors : null;
}
