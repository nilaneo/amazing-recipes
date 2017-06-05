import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Injectable()
export class RecipeService {
  getRecipes(): Promise<Recipe[]> {
    return Promise.resolve(RECIPES);
  };
  getRecipe(id: number): Promise<Recipe> {
    return this.getRecipes()
              .then(recipes => recipes.find(recipe => recipe.id === id));
  };

}

