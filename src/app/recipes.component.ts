import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'my-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: [ './recipes.component.css' ]
})
export class RecipesComponent implements OnInit  {
  title = 'Amazing recipes';
  selectedRecipe: Recipe;
  recipes: Recipe[];
  constructor(
    private router: Router,
    private recipeService: RecipeService
    ) { }
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  };
  getRecipes(): void {
    this.recipeService.getRecipes().then(recipees => this.recipes = recipees);
  };
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRecipe.id]);
  }
  ngOnInit(): void {
    this.getRecipes();
  };
}
