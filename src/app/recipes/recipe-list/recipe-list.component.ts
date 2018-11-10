import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]=[];
 subscription: Subscription;
 constructor(private recipeService:RecipeService,private route:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  this.recipes=this.recipeService.getRecipes();
  }
  NewRecipe(){
    this.route.navigate(['new'],{relativeTo:this.activateRoute});
  }
}
