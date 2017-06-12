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
  }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipees => this.recipes = recipees);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRecipe.id]);
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.recipeService.create(name)
      .then(recipe => {
        this.recipes.push(recipe);
        this.selectedRecipe = null;
      });
  }

  delete(recipe: Recipe): void {
    this.recipeService
        .delete(recipe.id)
        .then(() => {
          this.recipes = this.recipes.filter(h => h !== recipe);
          if (this.selectedRecipe === recipe) { this.selectedRecipe = null; }
        });
  }

}
