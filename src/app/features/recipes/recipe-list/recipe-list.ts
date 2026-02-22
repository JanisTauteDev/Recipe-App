import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type RecipeListItem = {
  id: number;
  name: string;
  image: string;
};

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink], //RouterLink: Für Navigation ohne href
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  //Dummy-Daten: nur das was die Liste braucht (id, name, image)
  recipes: RecipeListItem[] = [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp'
    },
    {
      id: 2,
      name: 'Vegetarian Stir-Fry',
      image: 'https://cdn.dummyjson.com/recipe-images/2.webp'
    },
    {
      id: 3,
      name: 'Chocolate Chip Cookies',
      image: 'https://cdn.dummyjson.com/recipe-images/3.webp'
    }
  ];
}
