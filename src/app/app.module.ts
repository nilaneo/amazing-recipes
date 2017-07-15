import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule, MdTabsModule, MdListModule, MdButtonModule,
  MdIconModule, MdInputModule, MdMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RootComponent } from './components/root/root.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipeService } from './services/recipe.service';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    FlexLayoutModule
  ],
  declarations: [
    RootComponent,
    DashboardComponent,
    RecipesComponent,
    EditRecipeComponent,
    RecipeSearchComponent,
    RecipeComponent
  ],
  providers: [RecipeService],
  bootstrap: [ RootComponent ]
})
export class AppModule { }
