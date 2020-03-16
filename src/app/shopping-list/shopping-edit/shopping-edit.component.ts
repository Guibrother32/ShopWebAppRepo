import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { stringify } from 'querystring';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIgredient();
  }

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('qtdInput') qtdInput:ElementRef;
  
  // @Output() newEl = new EventEmitter<Ingredient>();
  // onAdd(){
  //   console.log(this.nameInput.nativeElement.value);
  //   if(true){
  //     var newElName=this.nameInput.nativeElement.value;
  //     var  newElQtd=this.qtdInput.nativeElement.value;
  //     var newElement:Ingredient= new Ingredient(newElName,newElQtd);
  //     this.newEl.emit(newElement);
  //   }
  // }

  onAdd(){
    this.shoppingService.onAdd(this.nameInput.nativeElement.value,this.qtdInput.nativeElement.value);
  }
  onDelete(){
    this.shoppingService.onDeleteEl();
  }


}
