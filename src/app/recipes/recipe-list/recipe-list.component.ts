import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe-model'; 
import { RecipesService } from 'src/app/shared/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  // @Output() recipeRl = new EventEmitter<Recipe>();
  constructor(private recipesService:RecipesService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.recipes=this.recipesService.getRecipe();
  }
  // sendRecipeRl(recipe:Recipe){
  //   this.recipeRl.emit(recipe);
  // }

  onNewButton(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
