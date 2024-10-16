import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Receta no encontrada</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Tipo: {recipe.type}</p>
      <p>Descripción: {recipe.description}</p>
      <p>Preparación: {recipe.preparation}</p>
    </div>
  );
};

export default RecipeDetails;
