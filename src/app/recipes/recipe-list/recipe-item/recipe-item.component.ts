import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()recipeItems:Recipe;
@Output()recipeName=new EventEmitter<void>();
// @ViewChild('HeaderName') Value:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  getRecipeName(Name:string){
   
   
    // console.log(this.Value.nativeElement.textContent);
    console.log(Name);
this.recipeName.emit();
  }
}
