import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Joke } from '../models/joke.type';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-joke',
  imports: [FormsModule, CommonModule],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})


export class JokeComponent {
  jokes = signal<Joke[] | []>([]);
  constructor(private jokeService: JokesService) {
  }
  ngOnInit(){
    this.jokeService.getJokes("Programming").subscribe(x=>{
      let existingJokes : Joke[] = [];
      const existingJokesStr = localStorage.getItem("jokes");
      if(existingJokesStr){
        existingJokes = JSON.parse(existingJokesStr);
      }
      this.jokes.update(()=>[...existingJokes,...x.jokes]);
    })
  }
}
