import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.services';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private isChangeSub = Subscription;
  constructor(
    private slService: ShoppingListService,
    private logginService: LoggingService
  ) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    );
    this.logginService.printLog('Hello from shoppingListComponent ngOnInit')
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
}
