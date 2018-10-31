import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.services';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipeDescription:Recipe;
 id:number; 
 constructor(private recipeServices:RecipeService,private route:ActivatedRoute) { 


  }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
this.id=+params["id"];
this.recipeDescription=this.recipeServices.getRecipe(this.id);
    });
  }


  addIngredientList(){
this.recipeServices.addIngredientToShoppingList(this.recipeDescription.ingredient);
  }
}
