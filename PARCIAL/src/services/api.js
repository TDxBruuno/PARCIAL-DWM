const DISHES = "http://localhost:3000/dishes";

// Obtener todos las recetas
export const getRecipes = async () => {
  const response = await fetch(DISHES);
  return response.json();
};

// Obtener los detalles de una receta por ID
export const getRecipesById = async (id) => {
  const response = await fetch(`${DISHES}/${id}`);
  return response.json();
};

// Agregar una receta
export const addRecipe = async (recipe) => {
 const response = await fetch(DISHES, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(recipe),
 })
 return response.json();
};

// Eliminar una receta
export const deleteRecipe = async (id) => {
    const response = await fetch(`${DISHES}/${id}`, {
        method: "DELETE",
        });
        return response.json();
};