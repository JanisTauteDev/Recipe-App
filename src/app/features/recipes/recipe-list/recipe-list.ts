import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RecipeApi } from '../../../core/service/recipe-api';
import { Observable } from 'rxjs';

type RecipeListItem = {
  id: number;
  name: string;
  image: string;
};

type RecipeListResponse = {
  recipes: RecipeListItem[];
  total: number;
  skip: number;
  limit: number;
};

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink], //RouterLink: Für Navigation ohne href
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
    // Observable statt Dummy-Daten
  recipes$: Observable<RecipeListResponse>;

  constructor(private recipeApi: RecipeApi) {
    this.recipes$ = this.recipeApi.getRecipes();
  }
}
