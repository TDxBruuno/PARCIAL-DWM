import PropTypes from "prop-types";

const RecipeCard = ({ recipe, onDelete, onDetails }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <button onClick={() => onDetails(recipe.id)}>Detalles</button>
      <button onClick={() => onDelete(recipe.id)}>Borrar</button>
    </div>
  );
};

RecipeCard.PropTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDetails: PropTypes.func.isRequired,
};

export default RecipeCard;