import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},//empty path part of every path so we can use pathMacth properity value is full
    {path:'recipes',component:RecipesComponent},
    {path:'shopping-list',component:ShoppingListComponent}]

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[RouterModule]
})
export class AppRoutes{

}