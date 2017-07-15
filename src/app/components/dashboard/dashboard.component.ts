import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../types/recipe';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'ar-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.slice(1, 5));
  }
}

