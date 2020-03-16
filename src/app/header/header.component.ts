import {Component, Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{

    @Output() displayPage = new EventEmitter<string>();

    onRecipes(){
        this.displayPage.emit("Recipes");
    }
    onShoppingList(){
        this.displayPage.emit("ShoppingList");
    }

}