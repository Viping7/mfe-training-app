import { Injectable } from '@angular/core';
import { Category, Joke } from '../models/joke.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  constructor(private httpClient: HttpClient) {
}
  
getJokes(jokeType:Category){
    return this.httpClient.get<{jokes:Joke[]}>(`https://v2.jokeapi.dev/joke/${jokeType}?type=twopart&amount=10`)
}
}
