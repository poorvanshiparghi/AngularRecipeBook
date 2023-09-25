import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe',
            'This is simply test', 
            'https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/1:1/w_2240,c_limit/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 25)
            ]),
        new Recipe('Another Recipe', 'This is simply test', 
        'https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/1:1/w_2240,c_limit/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
        ])
      ];

      constructor(private slService:ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}