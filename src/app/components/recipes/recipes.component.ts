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
  recipes: Recipe[];

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => {
      this.recipes = sortBy(recipes, (recipe) => recipe.name.toUpperCase());
    });
  }

  goToDetail(recipe): void {
    this.router.navigate(['/recipes', recipe.id]);
  }

  goToAdd(): void {
    this.router.navigate(['/recipes/new']);
  }

  delete(recipe: Recipe): void {
    this.recipeService
      .delete(recipe.id)
      .then(() => {
        this.recipes = this.recipes.filter(h => h !== recipe);
      });
  }
}
