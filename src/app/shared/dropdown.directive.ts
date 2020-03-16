import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Renderer2, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective{

    @HostBinding('class.open') openToggle:boolean=false;
    @HostListener('document:click',['$event']) toggleOpen(event:Event){
        this.openToggle= this.elRef.nativeElement.contains(event.target) ? !this.openToggle : false;
    }
    constructor(private elRef:ElementRef){}
}
