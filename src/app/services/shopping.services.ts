import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingServices{
  private  ingredients:Ingredient[]=[new Ingredient('Apple',5),new Ingredient('Orange',5),new Ingredient('banana',5)];
itemsSelected=new Subject<number>();
  getShopingItem():Ingredient[]{
     return this.ingredients;
  }
  getItem(index:number):Ingredient{
    return this.ingredients[index];
 }
  addNewItem(ingredient:Ingredient)
  {
      this.ingredients.push(ingredient);
  }
  addNewItems(ingredient:Ingredient[])
  {
      this.ingredients.push(...ingredient);
  }

  updateItems(index:number,ingredient:Ingredient)
  {
      this.ingredients[index]=ingredient;
  }
  deleteItems(index:number)
  {
      this.ingredients.splice(index,1);
  }
}