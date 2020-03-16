import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe-model';
import {Ingredient} from '../../shared/ingredient-model';
import { ShoppingService } from 'src/app/shared/shopping.service';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
    
  }
  onToSl(){
    this.recipeService.addIngridientsToSl(this.recipe.ingredients);
  }

}
