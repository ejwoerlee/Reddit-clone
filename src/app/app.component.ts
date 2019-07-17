import { Component, Input } from '@angular/core';
import { strictEqual } from 'assert';

class Article {
 
  constructor(
    public title: string,
    public description: string,
    public votes?: number
  ) { 
    this.votes = votes || 0;
  }

  public date(): Date {
    return new Date();
  }

  public voteUp(): void {
    this.votes = this.votes + 1;
  }

  public voteDown(): void {
    this.votes = this.votes - 1;
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
      <div class="image">
        <img src="https://placekitten.com/g/400/300" />
      </div>
      <div class="content">
        
      <div class="header">
          {{ article.title }}
        </div>
        
        <div class="meta">
          <span class="ui blue small label">
            <i class="heart icon"></i>
            <div class="detail">
              {{ article.votes }}
            </div>
          </span>
          <span class="ui right floated">
            <a 
            (click)="upvote()"
            class="ui samll label">
              <i class="arrow up icon"></i>
              Upvote
            </a>
            <a 
              (click)="downvote()"
              class="ui samll label">
              <i class="arrow down icon"></i>
              Downvote
            </a>
          </span>
        </div>

        <div class="meta date">
          {{ article.date() | date:'medium' }}
        </div>

        <div class="meta description">
          <p>{{ article.description }} </p>
        </div>

        <div class="extra">
          <a
            href='#'
            target='_blank'
            class='ui right floated button primary'>
              Read more
              <i class='right chevron icon'></i>
          </a>
        </div>
      </div>
    `
})
export class ArticleComponent {
  @Input() article: Article;

  upvote() {
   // console.log("Called upvote function in the ArticleComponent");
    this.article.voteUp();
  }

  downvote() {
    //console.log("Called downvote function in the ArticleComponent");
    this.article.voteDown();
  }

}

@Component({
  selector: 'app-root',
  template: `
    <div class="ui containter">
      <app-sidebar></app-sidebar>
      <div class="ui divided items">
         <app-article
            *ngFor="let article of articles"
              [article]="article"
              class='item'>
          </app-article>
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
