import { Component, Input } from '@angular/core';
import { strictEqual } from 'assert';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[];
  title = 'Reddit-clone';

  constructor() {
    this.articles = [
      new Article (
         'The angular 2 screencast',
         'The easiest way to learn ng',
         10
     ),
      new Article (
        'Fullstack React',
         'This is react'
     ), 
     new Article(
         'Vue',
         'Another javascript framework'
     ), 
     new Article (
         'Test1',
         'Description test1'
     ),
     new Article (
         'Test2',
         'Description test2'
     )];
  }
}
