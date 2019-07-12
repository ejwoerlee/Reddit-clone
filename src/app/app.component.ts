import { Component, Input } from '@angular/core';

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
  </div>
 `
})
export class ArticleComponent {
  @Input() article: object;
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
  articles: object[];
  title = 'Reddit-clone';

  constructor() {
    this.articles =
    [{
        title: 'The angular 2 screencast',
        description: 'The easiest way to learn ng'
      }, {
        title: 'Fullstack React',
        description: 'This is react'
      }, {
        title: 'Vue',
        description: 'Another javascript framework'
      }, {
        title: 'Test1',
        description: 'Description test1'
      }, {
        title: 'Test2',
        description: 'Description test2'
    }];
  }
}
