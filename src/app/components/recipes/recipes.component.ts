import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sortBy } from 'lodash-es';
import { Recipe } from '../../types/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'ar-recipes',
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
    this.recipeService.getRecipes().then(recipes => {
      this.recipes = sortBy(recipes, (recipe) => recipe.name.toUpperCase());
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/recipes', this.selectedRecipe.id]);
  }

  goToAdd(): void {
    this.router.navigate(['/recip es/new']);
  }

  ngOnInit(): void {
    this.getRecipes();
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
