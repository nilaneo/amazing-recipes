import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Recipes</h2>
    <ul class="recipes">
      <li *ngFor="let recipe of recipes" (click)="onSelect(recipe)" [class.selected]="recipe === selectedRecipe"
>
        <span class="badge">{{recipe.id}}</span> {{recipe.name}}
      </li>
    </ul>
    <recipe-detail [recipe]="selectedRecipe"></recipe-detail>
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
  `],
  providers: [RecipeService]
})

export class AppComponent implements OnInit  {
  title = 'Amazing recipes';
  selectedRecipe: Recipe;
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  };
  getRecipes(): void {
    this.recipeService.getRecipes().then(recipees => this.recipes = recipees);
  };
  ngOnInit(): void {
    this.getRecipes();
  };
}
