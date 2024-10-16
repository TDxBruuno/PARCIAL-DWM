import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipesById } from "../services/api";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadRecipe = async () => {
      const recipeDetails = await getRecipesById(id);
      setRecipe(recipeDetails[0]);
    };
    loadRecipe();
  }, [id]);

  if (!recipe) {
    return <div>cargando...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>Tipo: {recipe.type}</p>
      <p>Descripción: {recipe.description}</p>
      <p>Preparación: {recipe.preparation}</p>
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
};

export default RecipeDetailsPage;
