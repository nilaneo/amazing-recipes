import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Recipe } from '../types/recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'api/recipes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get(this.recipesUrl)
               .toPromise()
               .then(response => response.json().data as Recipe[])
               .catch(this.handleError);
  }

  getRecipe(id: number): Promise<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(this.handleError);
  }

  create({name, ingredients}: Recipe): Promise<Recipe> {
    return this.http
      .post(this.recipesUrl, JSON.stringify({name, ingredients}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Recipe)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  update(recipe: Recipe): Promise<Recipe> {
    const url = `${this.recipesUrl}/${recipe.id}`;
    return this.http
      .put(url, JSON.stringify(recipe), {headers: this.headers})
      .toPromise()
      .then(() => recipe)
      .catch(this.handleError);
  }
}

