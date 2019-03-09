/**
 * Load the required imports
 */
const
    mongoose = require('mongoose'),
    colors = require('colors'),
    Users = require('../models/users');

console.log('Adding test records to users'.yellow);

// Using create
// Create trigger the middleware(s)
Users.create({
    firstName: "First 2",
    lastName: "Last 2",
    age: 99
}, function (err, record) {
    // Error handling
    if (err) {
        return handleError(err);
    }
    console.log('Record added using create: ', record);
});