import { Component, EventEmitter, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Field } from '../../models/field.type';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  fields = input.required<Field[]>();
  form: FormGroup | undefined;
  createJokeEmitter = output<EventEmitter<any>>();
  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    const fields = this.createFormFields();
    this.form = new FormGroup(fields)
  }

  createJoke(){
    this.createJokeEmitter.emit(this.form?.value)
  }

  createFormFields(){
    return this.fields().reduce((fieldObj,field:Field)=>{
        fieldObj[field.name] = new FormControl('',field.validations);
        return fieldObj
    },{} as {[key:string]:FormControl})
  }

}
