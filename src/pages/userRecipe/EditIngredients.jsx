import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import UserRecipeUtils from "./utils/userRecipe";

export default function EditIngredients(props) {
	const {
		key,
		ingredient,
		onIngredientChange,
		index,
		deleteIngredient,
		setIngredients,
		ingredients,
	} = props;

	const onChange = (e) =>
		onIngredientChange(e.target, index, ingredients, setIngredients);

	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Ingredient details:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter ingredient and info"
						name="ingredient_info"
						// value={ingredient.ingredient_name}
						value={ingredient.ingredient_info}
						onChange={onChange}
					/>
					{/* <Form.Control
						type="text"
						placeholder="Enter amount"
						name="amount"
						value={ingredient.amount}
						onChange={onChange}
					/> */}
				</Form.Group>
				<Button
					variant="primary"
					type="button"
					onClick={() => {
						deleteIngredient(index, ingredients, setIngredients);
					}}
				>
					Delete ingredient
				</Button>
			</Form>
			{/* <div className="form-group">
				<input
					type="text"
					className="form-control form-control-lg"
					placeholder="Enter ingredient name"
					name="ingredient_name"
					value={ingredient.ingredient_name}
					onChange={onChange}
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					className="form-control form-control-lg"
					placeholder="Enter amount"
					name="amount"
					value={ingredient.amount}
					onChange={onChange}
				/>
			</div>
			<button
				type="button"
				onClick={() => {
					deleteIngredient(index, ingredients, setIngredients);
				}}
			>
				This is delete
			</button> */}
		</div>
	);

	//NewCode
	// return (
	// 	<>
	// 		<div className="field has-addons">
	// 			<div className="control is-expanded">
	// 				<input
	// 					className="input"
	// 					type="text"
	// 					placeholder="1 kg potatoes, sliced"
	// 					onChange={(e) => {
	// 						onChange();
	// 					}}
	// 				/>
	// 			</div>
	// 			<button
	// 				className="button is-danger"
	// 				onClick={() => {
	// 					UserRecipeUtils.deleteIngredient(
	// 						index,
	// 						ingredients,
	// 						setIngredients
	// 					);
	// 				}}
	// 			>
	// 				Delete Ingredient
	// 			</button>
	// 		</div>
	// 	</>
	// );
}
