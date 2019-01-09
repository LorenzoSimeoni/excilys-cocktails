import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {

  recipe: Recipe;

  id: string;

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService
  ) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this._recipeService
      .getRecipe(this.id)
      .subscribe(recipe => (this.recipe = recipe));
  }
}
