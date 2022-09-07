import { AbstractControl } from "@angular/forms";

export class Mathvalidation {
    static additional(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const numberOne = form.value[sourceOne];
            const numberTwo = form.value[sourceTwo];
            if (numberOne + numberTwo === sum) return null;
            return { additional: true };
        }
    }
}