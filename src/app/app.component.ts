import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

 ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyDjbScHhSqpUtztSOIQ-GF3LVc15sRSG2c",
  authDomain: "angular-recipes-f78df.firebaseapp.com"
});
 } 
  title = 'First-Angular-Project';
loadedFeature='recipe';
 

onNavigate(value:string)
  {
console.log(value);
    this.loadedFeature=value;
  }
}
