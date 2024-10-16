import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import { getRecipes, addRecipe, deleteRecipe } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    //cargar las recetas al montar el componente
    useEffect(() => {
        const loadRecipes = async () => {
            const recipeList = await getRecipes();
            setRecipes(recipeList);
        };
        loadRecipes();
    }, []);

    //agregar una receta
    const handleAddRecipe = async (recipe) => {
        const updatedRecipes = await addRecipe(recipe);
        setRecipes(updatedRecipes);
    };

    //eliminar una receta
    const handleDeleteRecipe = async (id) => {
        const updatedRecipes = await deleteRecipe(id);
        setRecipes(updatedRecipes);
    };

    //ver detalles
    const handleViewDetails = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div>
            <h1>Recetas</h1>
            <div>
                <RecipeForm onSubmit={handleAddRecipe} />
            </div>
            <div className="recipes-list">
                {recipes.map((recipe) => (
                    <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onDelete={handleDeleteRecipe}
                onViewDetails={handleViewDetails}
                />
            ))}
            </div>
        </div>
    );
};

export default Home;