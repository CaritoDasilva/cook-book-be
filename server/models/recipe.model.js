const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "The pet must have a name"],
        minlength: [3, "Name must have at least 4 characters"]
    },
    ingredients: {
        type: String,
        unique: false,
        required: [true, "The Pet must have a type"],
        minlength: [3, "Type must have at least 4 characters"]
    },
    serves: {
        type: String,
        required: [true, "The Pet have to be a description"],
        minlength: [4, "Description must have at least 4 characters"]
    },
    cook_time: {
        type: String,
    },
    steps: {
        type: String,
    },
    likes: {
        type: Number
    }
})

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;