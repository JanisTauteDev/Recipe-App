import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, distinctUntilChanged, shareReplay } from 'rxjs/operators';

import { RecipeApi } from '../../../core/api/recipe-api';

interface RecipeListItem {
  id: number;
  name: string;
  image: string;
};

interface RecipeListResponse {
  recipes: RecipeListItem[];
  total: number;
  skip: number;
  limit: number;
};

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  readonly limit = 12;

  readonly skip$: Observable<number>;
  readonly data$: Observable<RecipeListResponse>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeApi: RecipeApi,
  ) {
    this.skip$ = this.route.queryParamMap.pipe(
      map((params) => Number(params.get('skip') ?? 0)),
      map((skip) => (Number.isFinite(skip) ? skip : 0)),
      map((skip) => Math.max(0, skip)),
      distinctUntilChanged(),
    );

    this.data$ = this.skip$.pipe(
      switchMap((skip) => this.recipeApi.getRecipes(this.limit, skip)),
      shareReplay(1),
    );
  }

  prev(currentSkip: number): void {
    this.updateSkip(Math.max(0, currentSkip - this.limit));
  }

  next(currentSkip: number, total: number): void {
    const nextSkip = currentSkip + this.limit;
    if (nextSkip < total) this.updateSkip(nextSkip);
  }

  private updateSkip(skip: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { skip },
      queryParamsHandling: 'merge',
    });
  }

  getCurrentPage(skip: number): number {
    return skip / this.limit + 1;
  }

  getTotalPages(total: number): number {
    return Math.ceil(total / this.limit);
  }
}
