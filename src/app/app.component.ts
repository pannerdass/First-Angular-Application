import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-Angular-Project';
loadedFeature='recipe';
  onNavigate(value:string)
  {
console.log(value);
    this.loadedFeature=value;
  }
}
