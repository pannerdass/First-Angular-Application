import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingServices } from '../services/shopping.services';
//import { ShoppingServices } from '../services/shopping.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[];
  constructor(private shoppingServices:ShoppingServices) { }

  ngOnInit() {
   this.ingredients= this.shoppingServices.getShopingItem();
  }
 
}
