import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]=[new Recipe('Chicken','Chicken recipes','../assets/img/img-1.jpg'),new Recipe('Pasata','Yummy pasata','../assets/img/img-2.png')];
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
 constructor() { }

  ngOnInit() {
  }
  getRecipe(recipe:Recipe)
  {
this.recipeWasSelected.emit(recipe);
  }
}
