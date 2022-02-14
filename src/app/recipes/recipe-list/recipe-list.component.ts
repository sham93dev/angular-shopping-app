import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is test', 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
