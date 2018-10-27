import { Ingredient } from "../shared/ingredient.model";

export class ShoppingServices{
  private  ingredients:Ingredient[]=[new Ingredient('Apple',5),new Ingredient('Orange',5),new Ingredient('banana',5)];

  getShopingItem():Ingredient[]{
     return this.ingredients;
  }
  addNewItem(ingredient:Ingredient)
  {
      this.ingredients.push(ingredient);
  }
  addNewItems(ingredient:Ingredient[])
  {
      this.ingredients.push(...ingredient);
  }
}