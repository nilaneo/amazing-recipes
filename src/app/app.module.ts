import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RootComponent } from './components/root/root.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeService } from './services/recipe.service';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTabsModule
  ],
  declarations: [
    RootComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeSearchComponent,
    AddRecipeComponent
  ],
  providers: [RecipeService],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
