import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe-model';
import {Ingredient} from '../../shared/ingredient-model';
import { ShoppingService } from 'src/app/shared/shopping.service';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe:Recipe;
  singleRecipe:Recipe;

  constructor(private recipeService:RecipesService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.params['id'];
    // this.singleRecipe = this.recipeService.getOneRecipe(id);
    this.route.params.subscribe(
        (params: Params) => {
          this.singleRecipe = this.recipeService.getOneRecipe(+params['id']);
        }
      );
  }


  onToSl(){
    this.recipeService.addIngridientsToSl(this.singleRecipe.ingredients);
  }
  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}


