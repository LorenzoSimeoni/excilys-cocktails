import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  recipe: Recipe;

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipe.name = 'punch';
    this.recipe.picture =
      'https://image.afcdn.com/recipe/20180705/80349_w648h344c1cx2208cy2125cxt275cyt0cxb3975cyb3750.jpg';
    this.recipe.description = 'it\'s a punch';
  }

  showRecipe() {
    console.log(this.recipe);
  }

  createCocktail() {
    this.recipe.ingredients = [{ ingredientId: 1 } as Ingredient];
    this._recipeService.postRecipe(this.recipe).subscribe();
  }
}
