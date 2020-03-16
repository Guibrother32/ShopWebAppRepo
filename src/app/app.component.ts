import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  showRecipes:boolean=true;

  displayPageM(infoHeader:string){
    if(infoHeader === 'Recipes'){
      this.showRecipes=true;
    }
    if(infoHeader === 'ShoppingList'){
      this.showRecipes=false;
    }
  }
  showPageRecipe(){
    return this.showRecipes;
  }
  showPageShopping(){
    return !this.showRecipes;
  }

}
