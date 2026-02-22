import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { RecipeApi, type userProfile } from '../../../core/service/recipe-api';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  user$: Observable<userProfile>;

  constructor(private route: ActivatedRoute, private api: RecipeApi, private location: Location){
    this.user$ = this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.api.getUserById(id))
    );
  }

  goBack(): void{ //Funktion um von UserProfile wieder zum Rezept zu gelangen
    this.location.back();
  }
}
