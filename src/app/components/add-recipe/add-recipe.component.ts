import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe';

@Component({
  selector: 'ar-add-recipe',
  templateUrl: './add-recipe.component.html',
})

export class AddRecipeComponent implements OnInit {
  recipe: Recipe;
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.recipe = {
      id: null,
      name: '',
      ingredients: []
    };
  }

  addIngredient(): void {
    this.recipe.ingredients.push('');
  }

  removeIngredient(index: number): void {
    this.recipe.ingredients.splice(index, 1);
  }

  getIndex(index: number) {
    return index;
  }

  save(): void {
    if (!this.recipe.name) { return; }
    this.recipeService.create(this.recipe)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
