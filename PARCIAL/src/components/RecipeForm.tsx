import { useState } from "react";
import PropTypes from "prop-types";

const RecipeForm = ({ onSubmit = () => {} }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    type: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe);
    setRecipe({ name: "", description: "", type: "", preparation: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={recipe.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={recipe.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={recipe.type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="preparation"
        placeholder="Preparation"
        value={recipe.preparation}
        onChange={handleChange}
      />
      <button type="submit">Agregar Receta</button>
    </form>
  );
};


RecipeForm.propTypes = {
    onsubmit: PropTypes.func.isRequired,
};

export default RecipeForm;