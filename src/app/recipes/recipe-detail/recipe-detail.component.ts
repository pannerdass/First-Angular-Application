import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input()recipeDescription:Recipe;
  constructor(private recipeServices:RecipeService) { 


  }

  ngOnInit() {
  }


  addIngredientList(){
this.recipeServices.addIngredientToShoppingList(this.recipeDescription.ingredient);
  }
}
