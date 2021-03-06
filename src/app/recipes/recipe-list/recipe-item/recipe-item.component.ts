import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()recipeItems:Recipe;
@Input()index:Number;
// @Output()recipeName=new EventEmitter<void>();
// @ViewChild('HeaderName') Value:ElementRef;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
 
}
