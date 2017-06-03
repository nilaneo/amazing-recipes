import { Component } from '@angular/core';

export class Recipe {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul class="recipes">
      <li *ngFor="let recipe of recipes">
        <span class="badge">{{recipe.id}}</span> {{recipe.name}}
      </li>
    </ul>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .recipes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .recipes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .recipes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .recipes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .recipes .text {
      position: relative;
      top: -3px;
    }
    .recipes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})

export class AppComponent {
  title = 'Amazing recipes';
  recipe: Recipe = {
    id: 1,
    name: 'Coconut cake'
  };
  recipes = RECIPES;
}

const RECIPES: Recipe[] = [
  { id: 11, name: 'Salted caramel tart' },
  { id: 12, name: 'Pistachio macaron' },
  { id: 13, name: 'Strawberry cheescake' },
  { id: 14, name: 'Crepes' },
  { id: 15, name: 'Brownie' },
  { id: 16, name: 'Blueberry zephyr' },
  { id: 17, name: 'Banana bread' },
  { id: 18, name: 'Cinnamon buns' },
  { id: 19, name: 'Japanese pancakes' },
  { id: 20, name: 'American cookies' }
];

