const RecipeController = require("../controllers/recipes.controllers");

module.exports = app => {
    app.get("/api/recipes/", RecipeController.findAllRecipes);
    app.get("/api/recipes/:id", RecipeController.findOneSingleRecipe);
    app.put("/api/recipes/update/:id", RecipeController.updateExistingRecipe);
    app.post("/api/recipes/new", RecipeController.createNewRecipe);
    app.delete("/api/recipes/delete/:id", RecipeController.deleteAnExistingRecipe);
};