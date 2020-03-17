import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';



const appRoutes: Routes = [

    //REMEMBER '' IS PART OF ALL PATHS, BECAUSE EVERY PATH HAS "NOTHING" AT THE BEGINNING AND SO IT MATCHES, THATS WHY WE USE PATHMATCH:FULL OTHERWISE WILL GET AN ERROR
    {path:'', redirectTo:'/Recipes', pathMatch:'full'},

    {path:'Recipes' , component:RecipesComponent, 
    children:[
        {path:'', component:RecipeStartComponent},
        {path:'new', component:EditRecipeComponent},
        {path:':id', component:RecipeDetailComponent},
        {path:':id/edit', component:EditRecipeComponent}
    
    ]},

    {path:'Shopping-list',component:ShoppingListComponent}
 
 ];

 @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule] //EXPORT TO APP.MODULE.TS
  })

 export class AppRoutingModule{}