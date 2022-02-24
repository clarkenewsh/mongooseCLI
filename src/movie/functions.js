// Access the movie model
const Movie = require("./model");

// add movie function to manipulate the db & export add movie function
exports.addMovie = async (title, actor, rating) => {
    try {
        // create object and use mongoose  method to use that object to add to the db
        // const movieObj = {title: title, actor: actor}; << below line does the same but DRY
        await Movie.create({title: title, actor: actor, rating: rating});
        return "Success";
    } catch (error) {
        console.log(error);
    }
}

// find & list all movies
exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}

// update movie by id - id in this case is title
exports.update = async (title, actor, rating) => {
    try {
        return await Movie.findOneAndUpdate({title}, {actor}, {rating})
    } catch (error) {
        console.log(error)
    }
}

// remove single movie by title 
exports.remove = async (title) => {
    try {
        return await Movie.remove({title})
    } catch (error) {
        console.log(error)
    }
}

