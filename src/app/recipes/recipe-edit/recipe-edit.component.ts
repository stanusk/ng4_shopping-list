import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { FormArray, FormControl, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
	public editMode = false;

	public recipeForm: FormGroup;

	public name: FormControl;
	public imagePath: FormControl;
	public description: FormControl;

	public ingredients: FormArray;

	private editedRecipeId: number;
	private ingredientValidators: IngredientValidators;

	constructor (
		private route: ActivatedRoute,
		private router: Router,
		private recipesService: RecipesService
	) { }

	ngOnInit () {
		this.editedRecipeId = +this.route.snapshot.params['id'];
		const editedRecipe = this.recipesService.getRecipe(this.editedRecipeId);

		this.editMode = !!this.editedRecipeId;

		this.ingredientValidators = {
			name: [
				Validators.required
			],
			quantity: [
				Validators.required,
				Validators.pattern(/^[1-9]+[0-9]*$/)
			]
		};

		this.initControls(editedRecipe);
		this.initForm();
	}

	initControls (editedRecipe: Recipe | undefined) {
		let defaults = {
			name: '',
			imagePath: '',
			description: '',
			ingredients: []
		};

		if (editedRecipe) {
			const defaultValues = getRecipeValues(editedRecipe);

			defaults = this.getFormDefaults(defaultValues);
		}

		this.name = new FormControl(
			defaults.name,
			Validators.required
		);
		this.imagePath = new FormControl(
			defaults.imagePath,
			Validators.required
		);
		this.description = new FormControl(
			defaults.description,
			Validators.required
		);
		this.ingredients = new FormArray(defaults.ingredients, Validators.minLength(1));


		/////////////////////////////////////
		// helpers

		function getRecipeValues (recipe: Recipe) {
			return {
				name: recipe.name,
				imagePath: recipe.imagePath,
				description: recipe.description,
				ingredients: recipe.ingredients.map(i => ({name: i.name, quantity: i.quantity}))
			};
		}
	}

	initForm () {
		this.recipeForm = new FormGroup({
			'name': this.name,
			'imagePath': this.imagePath,
			'description': this.description,
			'ingredients': this.ingredients,
		});
	}

	onSubmit () {
		if (this.recipeForm.invalid) {
			return;
		}

		this.saveOrUpdate(this.recipeForm.value);
		this.goBack();
	}

	addIngredient () {
		this.ingredients.push(this.makeIngredientFormGroup());
	}

	removeIngredient (index: number) {
		this.ingredients.removeAt(index);
	}

	saveOrUpdate (recipeData) {
		if (this.editMode) {
			this.updateRecipe(this.editedRecipeId, {id: this.editedRecipeId, ...recipeData});
		} else {
			this.saveNewRecipe(recipeData);
		}
	}

	goBack () {
		this.router.navigate(['../'], {relativeTo: this.route});
	}

	private makeIngredientFormGroup (ingredient: IngredientData = {name: null, quantity: null}): FormGroup {
		const validators = this.ingredientValidators;

		return new FormGroup({
			'name': new FormControl(ingredient.name, validators.name),
			'quantity': new FormControl(ingredient.quantity, validators.quantity)
		});
	}

	private getFormDefaults (values) {
		return Object.assign(
			{},
			values,
			{
				ingredients: values.ingredients.map(ingredient => this.makeIngredientFormGroup(ingredient))
			}
		);
	}

	private saveNewRecipe (recipeData) {
		this.recipesService.addRecipe(recipeData);
	}

	private updateRecipe (id, recipeData) {
		this.recipesService.updateRecipe(id, recipeData);
	}
}

interface IngredientData {
	name: string;
	quantity: number;
}

interface IngredientValidators {
	name: Array<ValidatorFn>;
	quantity: Array<ValidatorFn>;
}
