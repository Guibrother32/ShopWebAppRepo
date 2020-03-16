import { Output, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe-model';
import { Ingredient } from './ingredient-model';
import {ShoppingService} from './shopping.service';

@Injectable()
export class RecipesService{
    constructor(private shoppingService:ShoppingService){}
    @Output() selectedRecipe = new EventEmitter<Recipe>();
    recipes:Recipe[] =[
        new Recipe('Chicken Nuggets','This is a common ordinary Chicken Nuggets!','https://storage.needpix.com/rsynced_images/chicken-nuggets-246180_1280.jpg', [new Ingredient('Chicken nuggets',8) , new Ingredient('Fries',20) , new Ingredient('Ketchup',1)] ),
        new Recipe('Lasagna Bolognese','This is a common Lasagna Bolognese!','https://p0.pikrepo.com/preview/31/548/lasagna-on-white-plate.jpg', [new Ingredient('bologne',7,) , new Ingredient('Tomato sauce',2) , new Ingredient('Lasagne mass',2)] )
        
      ];
      
      getRecipe(){
          return this.recipes.slice();
      }
      addIngridientsToSl(ingredients:Ingredient[]){
        this.shoppingService.onAddEl(ingredients);
      }

}