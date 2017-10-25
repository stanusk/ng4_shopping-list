import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { RecipesService } from '../../../core/services/recipes.service';
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Recipe } from '../../../../shared/models/recipe.model';
import { Ingredient } from '../../../../shared/models/ingredient.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/services/auth.service';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
	isAuthenticated$: Observable<boolean>;

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
		private recipesService: RecipesService,
		private authService: AuthService
	) { }

	ngOnInit () {
		this.isAuthenticated$ = this.authService.isAuthenticated();

		this.editMode = this.route.snapshot.url.some((segment: UrlSegment) => segment.path === 'edit');
		this.editedRecipeId = this.editMode ? +this.route.snapshot.params['id'] : undefined;

		this.ingredientValidators = {
			name: [
				Validators.required
			],
			quantity: [
				Validators.required,
				Validators.pattern(/^[1-9]+[0-9]*$/)
			]
		};

		this.initForm(this.editMode);
	}

	initForm (isEditMode: boolean) {
		if (isEditMode) {
			this.recipesService.getRecipe(this.editedRecipeId).first()
				.subscribe((recipe: Recipe) => {
					this.initControls(recipe);
				});
		} else {
			this.initControls();
		}

		this.recipeForm = new FormGroup({
			'name': this.name,
			'imagePath': this.imagePath,
			'description': this.description,
			'ingredients': this.ingredients,
		});
	}

	initControls (editedRecipe?: Recipe) {
		let defaults = {
			name: '',
			imagePath: '',
			description: '',
			ingredients: []
		};

		if (editedRecipe) {
			defaults = this.getFormDefaults(editedRecipe);
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

	saveOrUpdate (recipe: Recipe) {
		if (this.editMode) {
			this.updateRecipe(this.editedRecipeId, recipe);
		} else {
			this.saveNewRecipe(recipe);
		}
	}

	goBack () {
		this.router.navigate(['../'], {relativeTo: this.route});
	}

	private makeIngredientFormGroup (ingredient: Ingredient = {name: null, quantity: null}): FormGroup {
		const validators = this.ingredientValidators;

		return new FormGroup({
			'name': new FormControl(ingredient.name, validators.name),
			'quantity': new FormControl(ingredient.quantity, validators.quantity)
		});
	}

	private getFormDefaults (recipe: Recipe) {
		return Object.assign(
			{},
			recipe,
			{
				ingredients: recipe.ingredients.map(ingredient => this.makeIngredientFormGroup(ingredient))
			}
		);
	}

	private saveNewRecipe (recipeData) {
		this.recipesService.addRecipe(recipeData);
	}

	private updateRecipe (id: number, recipeData: Recipe) {
		this.recipesService.updateRecipe(id, recipeData);
	}
}

interface IngredientValidators {
	name: Array<ValidatorFn>;
	quantity: Array<ValidatorFn>;
}
