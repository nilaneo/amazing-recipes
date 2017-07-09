import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RecipesComponent } from './components/recipes/recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/new', component: AddRecipeComponent },
  { path: 'recipes/:id', component: RecipeComponent },
  { path: 'recipes/:id/edit', component: EditRecipeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
