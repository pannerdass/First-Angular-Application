import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingServices } from 'src/app/services/shopping.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('localName')Name:ElementRef;
@ViewChild('localAmount')Amount:ElementRef;



  constructor(private shoppingService:ShoppingServices) { }

  ngOnInit() {
  }
Add(){
const ingName=this.Name.nativeElement.value;
const ingAmount=this.Amount.nativeElement.value;

  this.shoppingService.addNewItem({name:ingName,amount:ingAmount});
}
}
