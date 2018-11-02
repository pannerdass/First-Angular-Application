import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/Forms';
import { RecipeService } from 'src/app/services/recipe.services';
import { Recipe } from '../recipe.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:Number;
editMode=false;
recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=params["id"];
      this.editMode=params["id"] !=null;
      this.initForm();
    }

    )
  }

  onSubmit(){
  const newRecipe=new Recipe(
this.recipeForm.value['name'],
this.recipeForm.value['description'],
this.recipeForm.value['imgPath'],
this.recipeForm.value['ingredients']
  );
  if(this.editMode)
  {
this.recipeService.updateRecipe(+this.id,newRecipe);
  }else{
this.recipeService.addRecipe(newRecipe);
  }
  this.onNavigate();
 //   console.log(this.recipeForm);
  }
private initForm(){
let recipeName='';
let recipeImgPath='';
let recipeDescription='';
let recipeIngredients=new FormArray([]);
if(this.editMode)
{
  const recipe=this.recipeService.getRecipe(+this.id);
  recipeName=recipe.name;
  recipeImgPath=recipe.imagePath;
  recipeDescription=recipe.description;
  if(recipe.ingredient)
  {
    for(let ingredient of recipe.ingredient)
    {
      recipeIngredients.push(
 new FormGroup({
   'name':new FormControl(ingredient.name,Validators.required),
   'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
 })
      )
    }
  }
}
this.recipeForm=new FormGroup({
'name':new FormControl(recipeName,Validators.required),
'imgPath':new FormControl(recipeImgPath,Validators.required),
'description':new FormControl(recipeDescription,Validators.required),
'ingredients':recipeIngredients
});

}


addIngredient(){
(<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
  'name':new FormControl(null,Validators.required),
  'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
}))
}

onNavigate(){
this.router.navigate(['../'],{relativeTo:this.route});
}
onDeleteIngredients(i:number)
{
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
}
}
