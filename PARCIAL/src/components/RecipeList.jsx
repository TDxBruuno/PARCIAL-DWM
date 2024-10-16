import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipes();
      setRecipes(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p>{recipe.type}</p>
          <Link to={`/details/${recipe.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};


export default RecipeList;
