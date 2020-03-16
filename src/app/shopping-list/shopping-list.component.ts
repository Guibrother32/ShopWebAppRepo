import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingService.getIgredient();
    this.shoppingService.ingredientsChanged.subscribe(  
      (ingredients:Ingredient[])=>{this.ingredients=ingredients}
    );
  }

  // onNewEl(ingreElSe:Ingredient){
  //   this.ingredients.push(ingreElSe);
  // }

  

}
