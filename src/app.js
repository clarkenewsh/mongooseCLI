// run connection.js on start
require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
// import functions and target by name
const { addMovie, list, update, remove} = require("./movie/functions");

const app = async (yargsObj) => {
    try {
       if(yargsObj.add) {
           // add movie functionality
           console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.rating));
       } else if(yargsObj.list) {
           // list all movies functionality 
           console.log(await list());
       } else if(yargsObj.update) {
           // update single movie
           console.log(await update(yargsObj.title, yargsObj.actor, yargsObj.rating));
       } else if(yargsObj.remove) {
        // delete single movie
        console.log(await remove(yargsObj.title, yargsObj.actor, yargsObj.rating));
       
       } else {
           console.log("Incorrect command");
       }
       // close running connection
       await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);