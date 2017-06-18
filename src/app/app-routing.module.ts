import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/new', component: AddRecipeComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'recipes/:id/edit', component: RecipeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
