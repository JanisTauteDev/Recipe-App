import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RecipeApi } from '../../../core/api/recipe-api';
import type { RecipeDetail as RecipeDetailModel } from '../../../core/api/recipe-api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  recipe$: Observable<RecipeDetailModel>;

  constructor(
    private route: ActivatedRoute,
    private recipeApi: RecipeApi,
    private Location: Location,
  ) {
    this.recipe$ = this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.recipeApi.getRecipeById(id)),
    );
  }

  goBack(): void {
    this.Location.back();
  }
}
