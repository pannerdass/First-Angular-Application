import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('localName')Name:ElementRef;
@ViewChild('localAmount')Amount:ElementRef;

@Output()newIngredients=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
Add(){
const ingName=this.Name.nativeElement.value;
const ingAmount=this.Amount.nativeElement.value;

  this.newIngredients.emit(new Ingredient(ingName,ingAmount));
}
}
