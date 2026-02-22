import { Routes } from '@angular/router';
import { RecipeList } from './features/recipes/recipe-list/recipe-list';
import { RecipeDetail } from './features/recipes/recipe-detail/recipe-detail';
import { UserProfile } from './features/users/user-profile/user-profile';

export const routes: Routes = [
  //Routing für /recipes in der URL
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeList },
  { path: 'recipes/:id', component: RecipeDetail },
  { path: 'users/:id', component: UserProfile},
];
