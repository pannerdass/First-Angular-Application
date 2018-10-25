import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]=[new Recipe('Panner','pannertest','dda'),new Recipe('Panner1','pannertest1','test')];
  constructor() { }

  ngOnInit() {
  }

}
