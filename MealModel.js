const mongoose = require("mongoose") // тут все беремо з документації => https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose

const mealSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Meal", mealSchema)