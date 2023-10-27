import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shoppingList.services";
import { RecipeService } from "./recipes/recipe.services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-iterceptor.service";
import { LoggingService } from "./logging.service";

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
})
export class CoreModule {}