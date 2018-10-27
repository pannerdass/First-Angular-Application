import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective implements OnInit{
   
    
  @HostBinding('class.open') isOpen=false;
    constructor(private dropdownEle:ElementRef,private render:Renderer2){

   }
   
    ngOnInit(): void {
        
    }
@HostListener('click')button(){
this.isOpen=!this.isOpen;
}

}