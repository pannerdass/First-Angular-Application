import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingServices } from 'src/app/services/shopping.services';
import { NgForm } from '@angular/Forms';
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
subscribtion:Subscription;
editMode=false;
editedItemIndex:number;
editedIngredient:Ingredient;
@ViewChild('f')shoppingForm:NgForm; 
  constructor(private shoppingService:ShoppingServices) { }

  ngOnInit() {

   this.subscribtion= this.shoppingService.itemsSelected.subscribe((n:number)=>{
   this.editedItemIndex=n;
   this.editMode=true;
   this.editedIngredient=this.shoppingService.getItem(this.editedItemIndex);
  this.shoppingForm.setValue({
    name:this.editedIngredient.name,
    amount:this.editedIngredient.amount
  }) 
  })
  }
Add(form:NgForm){

 const value=form.value;
  
  if(this.editMode===true)
  {
    this.shoppingService.updateItems(this.editedItemIndex,{name:value.name,amount:value.amount});
  }else{
    this.shoppingService.addNewItem({name:value.name,amount:value.amount});
  }
this.onClear();

}
onDelete()
{
  this.onClear();
  this.shoppingService.deleteItems(this.editedItemIndex); 
}
onClear()
{
  this.shoppingForm.reset();
this.editMode=false;
}
ngOnDestroy(){
  this.subscribtion.unsubscribe();
}
}
