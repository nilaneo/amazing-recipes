import { Component } from '@angular/core';

@Component({
  selector: 'ar-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/recipes" routerLinkActive="active">Recipes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Amazing recipes';
}
