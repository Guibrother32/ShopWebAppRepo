import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  // recipeR:Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
    // this.recipeService.selectedRecipe.subscribe((recipe)=>{this.recipeR=recipe});
    console.log(this.recipeService.recipes[0].id);
    console.log(this.recipeService.recipes[0].name);
  }
}
