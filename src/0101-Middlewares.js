/**
 * Load the required imports
 */
const
    mongoose = require('mongoose');

/**
 * Define users schema
 */

// Mongoose provides all the CRUD methods :
//    Schema.create
//    Schema.update
//    Schema.remove
//    Schema.find
//
//  on the model.

// Define the schema
var schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});

// Generate the model
var Model = mongoose.models.Users || mongoose.model('Users', schema);

// NodeJs.
module.exports = Model;