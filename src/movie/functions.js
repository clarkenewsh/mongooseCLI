// Access the model
const Movie = require("./model");

// add movie function to manipulate the db & export add movie function
exports.addMovie = async (title, actor) => {
    try {
        // create object and use mongoose  method to use that object to add to the db
        // const movieObj = {title: title, actor: actor}; << below line does the same but DRY
        await Movie.create({title: title, actor: actor});
        return "Success";
    } catch (error) {
        console.log(error);
    }
}

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}

