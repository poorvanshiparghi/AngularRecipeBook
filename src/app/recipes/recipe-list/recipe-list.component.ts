import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply test', 'https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/1:1/w_2240,c_limit/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg'),
    new Recipe('Another Recipe', 'This is simply test', 'https://assets.epicurious.com/photos/5df7c9efa9f50600094dffed/1:1/w_2240,c_limit/COOK90_ButterPaneer_RECIPE_V2_121119_288.jpg')
  ];

  ngOnInit() {
    
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
