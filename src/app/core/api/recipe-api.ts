import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type RecipeListItem = {
  id: number;
  name: string;
  image: string;
  userId: number;
};

type RecipeListResponse = {
  recipes: RecipeListItem[];
  total: number;
  skip: number;
  limit: number;
};

export type RecipeDetail = {
  id: number;
  name: string;
  image: string;
  userId: number;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type userProfile = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  username: string;
};

@Injectable({
  providedIn: 'root',
})
export class RecipeApi {
  private baseURL = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getRecipes(limit = 30, skip = 0): Observable<RecipeListResponse> {
    return this.http.get<RecipeListResponse>(`${this.baseURL}/recipes?limit=${limit}&skip=${skip}`);
  }

  getRecipeById(id: number): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(`${this.baseURL}/recipes/${id}`);
  }

  getUserById(id: number): Observable<userProfile> {
    return this.http.get<userProfile>(`${this.baseURL}/users/${id}`);
  }
}
