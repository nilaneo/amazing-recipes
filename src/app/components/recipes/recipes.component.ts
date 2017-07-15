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
      this.recipeService.getRecipes().subscribe(recipes => {
        this.recipes = sortBy(recipes, (recipe) => recipe.name.toUpperCase());
      });
    }

    goToDetail(recipe: Recipe): void {
      this.router.navigate(['/recipes', recipe.$key]);
    }

    goToAdd(): void {
      this.router.navigate(['/recipes/new']);
    }

    goToEdit(recipe: Recipe): void {
      this.router.navigate(['/recipes', recipe.$key, 'edit']);
    }

    delete(recipe: Recipe): void {
      this.recipeService.delete(recipe.$key);
    }
  }
