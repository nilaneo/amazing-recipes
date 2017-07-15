import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe';

@Component({
  selector: 'ar-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})

export class EditRecipeComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        if (params['id']) {
          return this.recipeService.getRecipe(params['id']);
        } else {
          return Observable.of({
            name: '',
            ingredients: []
          });
        }
      })
      .subscribe(recipe => this.recipe = recipe);
  };

  save(): void {
    Promise.resolve(this.saveOrUpdate())
      .then(() => this.goBack());
  }

  saveOrUpdate() {
    if (this.recipe.$key == null) {
      return this.recipeService.create(this.recipe);
    } else {
      return this.recipeService.update(this.recipe);
    }
  }

  goBack(): void {
    this.location.back();
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
}
