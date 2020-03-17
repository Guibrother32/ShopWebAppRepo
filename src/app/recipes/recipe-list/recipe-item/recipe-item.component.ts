import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe-model';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  @Input() index:number;
  @Input() recipeItem:Recipe;
  constructor(private recipeService:RecipesService) { }
  ngOnInit(): void {
  }


  showDetails(){
    this.recipeService.selectedRecipe.emit(this.recipeItem);
  }

}
