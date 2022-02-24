const mongoose = require("mongoose");

// build movie schema (db structure) using mongoose (much like MVC architecture)
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified"
    },
});

// build Movie model to store movie schema structure
const Movie = mongoose.model("Movie", movieSchema);

// export model
module.exports = Movie;