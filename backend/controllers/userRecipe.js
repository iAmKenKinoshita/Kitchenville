const userRecipeModel = require("../model/userRecipe");

exports.getMyRecipeList = async (req, res, next) => {
	const userID = req.params.userId;
	const recipe = await userRecipeModel.getAllRecipeList(userID);
	// console.log(recipe);
	res.send(recipe);
};

exports.getAllIngredients = async (req, res, next) => {
	const ID = req.params.listId;
	const ingredients = await userRecipeModel.getAllIngredients(ID);
	console.log(ingredients);
	res.send(ingredients);
};

exports.createNewRecipe = async (req, res, next) => {
	const userID = req.params.userId;
	const name = req.get("name");
	const description = req.get("description");
	const instruction = req.get("instruction");
	const ingredients = JSON.parse(req.get("ingredients"));
	const is_fv = req.get("is_fv");

	await userRecipeModel.createNewRecipe(
		userID,
		name,
		description,
		instruction,
		is_fv
	);

	let allRecipes = [];

	await userRecipeModel.getAllRecipeList(userID).then((data) => {
		allRecipes = data;
	});

	let recipe = allRecipes.find((recipe) => recipe.name === name);
	let RecipeId = recipe.id;

	await userRecipeModel.editRecipeIngredients(ingredients, RecipeId);

	res.status(200).send("Created new recipe");
};

exports.editRecipe = async (req, res, next) => {
	const ID = req.params.listId;
	const ingredients = JSON.parse(req.get("ingredients"));
	const recipeDetails = JSON.parse(req.get("recipeDetails"));

	await userRecipeModel.editRecipeDetails(recipeDetails, ID);
	await userRecipeModel.deleteIngredients(ID);
	await userRecipeModel.editRecipeIngredients(ingredients, ID);
	res.send("Recipe Edited");
};

exports.deleteRecipe = async (req, res, next) => {
	const ID = req.params.listId;
	await userRecipeModel.deleteIngredients(ID);
	await userRecipeModel.deleteRecipe(ID);
	res.send("Deleted recipe");
};
