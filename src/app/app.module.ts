import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeService } from './recipe.service';
import { DashboardComponent } from "./dashboard.component";

RouterModule.forRoot([
  {
    path: 'recipes',
    component: RecipesComponent
  }
])



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    DashboardComponent
  ],
  providers: [
    RecipeService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
