import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";
import { RecipeService } from "../services/recipe.services";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorage{
constructor(private http:Http,private recipeService:RecipeService,private authService:AuthService){


}
saveRecipes(){
   return this.http.put("https://angular-recipes-f78df.firebaseio.com/recipes.json",this.recipeService.getRecipes());
}

getRecipes(){
  const token= this.authService.getToken();
  this.http.get(`https://angular-recipes-f78df.firebaseio.com/recipes.json?auth=${token}`).subscribe(
        (response:Response)=>{
          console.log(response.json());
            const recipe:Recipe[]=response.json();
            this.recipeService.setRecipie(recipe);
        });
}
}