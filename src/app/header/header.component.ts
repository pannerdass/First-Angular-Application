import {Component, Output, EventEmitter} from '@angular/core'


@Component({
selector:'app-header',
templateUrl:'./header.component.html'

})

export class HeaderComponent{
@Output() featureSelect=new EventEmitter<string>();

    onSelect(value:string){

        this.featureSelect.emit(value);
    }
}