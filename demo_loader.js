/**
 * Load all files in this folder.
 * This is only for the demo purposes
 */
const
    dbConfig = require('./config/db_config'),
    path = require('path'),
    mongoose = require('mongoose'),
    colors = require('colors');

// DB Init
// The connection return the db object, we store it for later usage
mongoose.connect(`${dbConfig.protocol}${dbConfig.ip}`, {
        useNewUrlParser: true,
        dbName: "mongoCourse"
    },
    function (err) {
        if (err) {
            console.log(colors.yellow.inverse("\n\n" +
                "--------------------------------------------\n" +
                "-- Error Connecting to mongodb database.  --\n" +
                "-- Verify that mongod is running.         --\n" +
                "--------------------------------------------\n"));
        } else {
            console.log(colors.green.inverse("\n\n" +
                "----------------------------------\n" +
                "-- Connected to local mongoDB.  --\n" +
                "----------------------------------\n"));
        }
    });

// Auto load all files in the modules directory
const modulesFolder = path.join(__dirname, path.sep, 'models');
const srcFolder = path.join(__dirname, path.sep, 'src');
require("fs")
    .readdirSync(path.join(__dirname, path.sep, 'models'))
    .forEach(function (fileName) {
        require(path.join(modulesFolder, path.sep, fileName));
    });

/*
require("fs")
    .readdirSync(path.join(__dirname, path.sep, 'src'))
    .forEach(function (fileName) {
        require(path.join(srcFolder, path.sep, fileName));
    });
*/