import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { RecipeSearchService } from '../../services/recipe-search.service';
import { Recipe } from '../../types/recipe';
@Component({
  selector: 'ar-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: [ './recipe-search.component.css' ],
  providers: [RecipeSearchService]
})
export class RecipeSearchComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private recipeSearchService: RecipeSearchService,
    private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.recipes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.recipeSearchService.search(term)
        : Observable.of<Recipe[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Recipe[]>([]);
      });
  }
  gotoDetail(recipe: Recipe): void {
    const link = ['/recipes', recipe.$key];
    this.router.navigate(link);
  }
}
