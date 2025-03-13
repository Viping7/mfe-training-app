import { Component, signal, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '../common/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Field } from '../models/field.type';
import { JokesService } from '../../../../jokes-app/src/app/services/jokes.service';
import { Joke } from '../../../../jokes-app/src/app/models/joke.type';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-create-joke',
  imports: [DynamicFormComponent,MatCardModule,MatGridListModule],
  templateUrl: './create-joke.component.html',
  styleUrl: './create-joke.component.scss',
})
export class CreateJokeComponent {
  jokeFields = signal<Field[]>([ {
      type: "text",
      name:"setup",
      label: "Setup",
      validations:[Validators.required]
  },{
    type: "text",
    name:"delivery",
    label: "Delivery",
    validations:[Validators.required]
},{
    type: "select",
    name:"category",
    label: "Category",
    validations:[Validators.required],
    options:["Pun" , "Programming"]
}]);


constructor(private jokeService:JokesService,private router:Router){

}
createJoke(jokePayload:any){
  let existingJokes : Joke[] = [];
  const existingJokesStr = localStorage.getItem("jokes");
  if(existingJokesStr){
    existingJokes = JSON.parse(existingJokesStr);
  }
  const payload:Joke = {
    "error": false,
    "category":"Programming",
    "type": "twopart",
    "setup": jokePayload.setup,
    "delivery": jokePayload.delivery,
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false,
      "userCreated":true,
    },
    "id": 21,
    "safe": true,
    "lang": "en"
  }
  const updatedJokes = [...existingJokes, payload]
  localStorage.setItem("jokes",JSON.stringify(updatedJokes));
  this.router.navigate(["/jokes"])
}
}
