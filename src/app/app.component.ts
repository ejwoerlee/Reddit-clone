import { Component, Input } from '@angular/core';
import { strictEqual } from 'assert';

class Article {
  constructor(
    public title: string,
    public description: string
  ) {
  }
}

@Component({
   selector: 'app-sidebar',
   template: `
     <div id="sidebar">
        Sidebar will go here
     </div>
  `
})
export class SidebarComponent {
}

@Component({
  selector: 'app-article',
  template: `
  <div>
    <h2> {{ article.title }} </h2>
    <p> {{ article.description }} </p>
  </div>
 `
})
export class ArticleComponent {
  @Input() article: Article;
}

@Component({
  selector: 'app-root',
  template: `
    <div id="containter">
      <app-sidebar></app-sidebar>
      <div id="content">
        <div>
          <app-article
          *ngFor="let article of articles"
            [article]="article"></app-article>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  articles: Article[];
  title = 'Reddit-clone';

  constructor() {
    this.articles = [
      new Article (
         'The angular 2 screencast',
         'The easiest way to learn ng'
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
