
import {Ingredient, newIngredient} from './ingredient.model';

export class Recipe {
  private _ingredients: Array<Ingredient> = [];
  private _name: string;
  readonly id: number;

  public description: string;
  public imagePath: string;

  get name (): string {
    return this._name;
  }
  set name (newName: string) {
    if (newName.length) {
      this._name = newName;
    } else {
      throw new Error(`ingredient name cannot be set to ${newName}`);
    }
  }

  get ingredients (): Array<Ingredient> {
    return this._ingredients;
  }

  constructor ({name, id, ingredients, description, imagePath}: RecipeConstructorProps) {
    this._name = name;
    this.id = id;
    this.description = description;
    this.imagePath = imagePath;

    this.addIngredients(ingredients || []);
  }

  addIngredients (ingredients: RecipeNewIngredients) {
    const pushIngredient = i => this._ingredients.push(i instanceof Ingredient ? i : newIngredient(i));

    ingredients.forEach(pushIngredient);
  }
}





let lastRecipeId = 0;

export function newRecipe (newRecipeProps: NewRecipeProps) {
  return new Recipe(Object.assign(newRecipeProps, {id: ++lastRecipeId}));
}


interface IngredientSourceData {
  name: string;
  quantity?: number;
}

interface RecipeConstructorProps extends NewRecipeProps {
  id: number;
}

interface NewRecipeProps {
  name: string;
  ingredients?: RecipeNewIngredients;
  description: string;
  imagePath: string;
}

type RecipeNewIngredients = Array<IngredientSourceData | Ingredient>;
