import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingServices } from "./shopping.services";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
  constructor(private shoppIngService:ShoppingServices){

  }
  recipesChanged = new Subject<Recipe[]>();
  recipeSeleted=new EventEmitter();
    private recipes:Recipe[]=[];
    // [new Recipe('Chicken'
    // ,'Chicken recipes'
    // ,'/assets/img/img-1.jpg'
    // ,[new Ingredient('Meat',5),
    // new Ingredient('Rice',10)]),
    // new Recipe('Pasata',
    // 'Yummy pasata',
    // '../assets/img/img-2.png'
    // ,[new Ingredient('Mutoon',5),
    // new Ingredient('pork',10)])];

   getRecipes():Recipe[]{
       return this.recipes;
   }
   getRecipe(id:number):Recipe{
    return this.recipes[id];
}
setRecipie(recipe:Recipe[]){

  this.recipes=recipe;
  this.recipesChanged.next(this.recipes);
 // console.log(this.recipes);
}
   addIngredientToShoppingList(ingredient:Ingredient[])
   {
     this.shoppIngService.addNewItems(ingredient); 
   }

   addRecipe(recipe:Recipe){
this.recipes.push(recipe);
   }
   updateRecipe(index:number,recipe:Recipe){
this.recipes[index]=recipe;
   }
   deleteRecipe(index:number){
     this.recipes.splice(index,1);
   }
}