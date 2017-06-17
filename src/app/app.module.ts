import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeService } from './recipe.service';
import { RecipeSearchComponent } from './recipe-search.component';
import { AddRecipeComponent } from './add-recipe.component';

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
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
