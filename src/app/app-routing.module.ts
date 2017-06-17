import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { AddRecipeComponent } from './add-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipies/new', component: AddRecipeComponent },
  { path: 'recipies/:id', component: RecipeDetailComponent },
  { path: 'recipies/:id/edit', component: RecipeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
