import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription  

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipes()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    
  }


}
