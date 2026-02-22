import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  id: number;

  constructor(private route: ActivatedRoute){ //ActivatedRoute -> Zugriff auf die aktuelle Route
    const idParam = this.route.snapshot.paramMap.get('id'); // snapshot.paramMap.get('id') liest id aus /recipe/id, später: Observable Stream
    this.id = Number(idParam);  //Number() -> macht aus dem String "7" die Zahl 7
  }
}
