import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe } from '../../shared/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  recipe: Recipe;
  id: string;

  recipeForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.recipeForm = this._fb.group({
      name: [''],
      picture: [''],
      description: ['']
    });
    this._recipeService
      .getRecipe(this.id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.recipeForm.patchValue({
          name: recipe.name,
          picture: recipe.picture,
          description: recipe.description
        });
      });
  }

  updateCocktail() {
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this.recipe.description = this.recipeForm.get('description').value;

    this._recipeService.patchRecipe(this.recipe).subscribe(() => this._router.navigate(['/recipes']));
  }

  showRecipe() {
    console.log(this.recipeForm.getRawValue());
  }
}
