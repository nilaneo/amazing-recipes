import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe';

@Component({
  selector: 'ar-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipeService.getRecipe(+params['id']))
      .subscribe(recipe => this.recipe = recipe);
  };

  save(): void {
    this.recipeService.update(this.recipe)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
