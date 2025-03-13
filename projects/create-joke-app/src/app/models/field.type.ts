import { ValidationErrors, Validators } from "@angular/forms";

export type Field = {
    type: string;
    name:string;
    label: string;
    validations:Validators
    options?:string[]
}