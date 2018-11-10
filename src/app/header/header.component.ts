import {Component} from '@angular/core'
import { DataStorage } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';


@Component({
selector:'app-header',
templateUrl:'./header.component.html'

})

export class HeaderComponent{

constructor(private dataStorage:DataStorage,private authService:AuthService){

}
onSave(){
    this.dataStorage.saveRecipes().subscribe(
        (response:Response)=>console.log(response),
        (error)=>console.log(error));
}
onFetch(){
    this.dataStorage.getRecipes();
}
onLogout(){
    this.authService.logOut();
}
}