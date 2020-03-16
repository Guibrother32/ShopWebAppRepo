import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient-model';




export class ShoppingService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]= [
        new Ingredient('Banana',7),
        new Ingredient('Tomatoes',10)
    
      ];

      getIgredient(){
          return this.ingredients.slice();
      }
    //   onAdd(name:string,quantity:number){
    //       this.ingredientsChanged.emit(this.ingredients);
    //       //   that line above is only because we update with a slice method and we need to "tell" to angular the change
    //       if(quantity>0 && name!=''){
    //         this.ingredients.push({name,quantity});
    //       }
          
    //   }
    onAdd(name:string,quantity:number){
        //   that line above is only because we update with a slice method and we need to "tell" to angular the change
        if(quantity>0 && name!=''){
          this.ingredients.push({name,quantity});
        }
        this.ingredientsChanged.emit(this.ingredients);
    }
    onAddEl(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.ingredients.push(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients);
    }
    onDeleteEl(){
        this.ingredients.splice(0,1);
        this.ingredientsChanged.emit(this.ingredients);
    }

}