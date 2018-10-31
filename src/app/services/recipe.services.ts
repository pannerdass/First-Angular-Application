import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingServices } from "./shopping.services";
@Injectable()
export class RecipeService{
  constructor(private shoppIngService:ShoppingServices){

  }
  recipeSeleted=new EventEmitter();
    private recipes:Recipe[]=
    [new Recipe('Chicken'
    ,'Chicken recipes'
    ,'/assets/img/img-1.jpg'
    ,[new Ingredient('Meat',5),
    new Ingredient('Rice',10)]),
    new Recipe('Pasata',
    'Yummy pasata',
    '../assets/img/img-2.png'
    ,[new Ingredient('Mutoon',5),
    new Ingredient('pork',10)])];

   getRecipes():Recipe[]{
       return this.recipes.slice();
   }
   getRecipe(id:number):Recipe{
    return this.recipes.slice()[id];
}
   addIngredientToShoppingList(ingredient:Ingredient[])
   {
     this.shoppIngService.addNewItems(ingredient); 
   }
}