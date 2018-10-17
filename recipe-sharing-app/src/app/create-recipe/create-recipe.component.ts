import { Component, OnInit } from '@angular/core';
import { Recipe } from '../types/recipe';
import { User } from '../types/user';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  recipe: Recipe;
  // to set
  owner: User;
  name: string;
  steps: string;
  stepList: string[];
  ingredients: string;
  ingredientsList: string[];
  deleted: boolean;

  constructor(private recipeService: RecipeService, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  generateStepsList(): void {
    this.stepList = this.steps.split(',\n');
  }

  generateIngredientList(): void {
    this.ingredientsList = this.ingredients.split(',\n');
  }

  updateRecipe(recipe: Recipe): void {
    this.recipe = recipe;
    console.log(this.recipe);
    if (this.recipe == null) {
      this.router.navigate(['/create-recipe']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  createRecipe(): void {
    this.recipeService.createRecipe(new Recipe(null,
      this.name, this.steps, this.ingredients, this.deleted, 5)).subscribe(result => this.updateRecipe(result));
  }
}
