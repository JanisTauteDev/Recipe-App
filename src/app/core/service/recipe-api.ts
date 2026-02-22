import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Recipe = {
  id: number,
  name: string,
  image: string,
  userId: number;
};

type RecipeListResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeApi {
  private baseURL = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}
  
  getRecipes(limit = 30, skip = 0): Observable<RecipeListResponse>{   //API liefert recipes, total, etc. -> Typensicherheit
    return this.http.get<RecipeListResponse>(
      `${this.baseURL}/recipes?limit=${limit}&skip=${skip}`
    );
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseURL}/recipes/${id}`)
  }
}
