import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { MOCK_RECIPES } from './recipe.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  SERVER_URL = 'MOCK_RECIPES';

  constructor(private _httpClient: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(this.SERVER_URL);
  }
  getRecipe(id: string): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this.SERVER_URL}/${id}`);
  }
}
