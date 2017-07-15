import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Recipe } from '../types/recipe';

@Injectable()
export class RecipeService {
  constructor(private db: AngularFireDatabase) { }

  getRecipes(): FirebaseListObservable<Recipe[]> {
    return this.db.list('/recipes');
  }

  getRecipe(id: string): FirebaseObjectObservable<Recipe> {
    return this.db.object(`/recipes/${id}`);
  }

  create(recipe: Recipe): firebase.database.ThenableReference {
    return this.getRecipes().push(recipe);
  }

  delete(id: string): firebase.Promise<void> {
    return this.getRecipes().remove(id);
  }

  update(recipe: Recipe): firebase.Promise<void> {
    return this.getRecipes().update(recipe.$key, recipe);
  }
}

