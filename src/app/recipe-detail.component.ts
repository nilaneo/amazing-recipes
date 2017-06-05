import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
})

export class RecipeDetailComponent implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipeService.getRecipe(+params['id']))
      .subscribe(recipe => this.recipe = recipe);
  };

  goBack(): void {
    this.location.back();
  };

  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

}
