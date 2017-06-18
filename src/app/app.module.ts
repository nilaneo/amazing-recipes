import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppComponent } from './components/app/app.component';
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
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeSearchComponent,
    AddRecipeComponent
  ],
  providers: [RecipeService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
