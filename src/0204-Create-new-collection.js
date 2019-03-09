/**
 * Load the required imports
 */
const
  mongoose = require('mongoose'),
  Users = require('../models/users');

var dummy = mongoose.model("Dummy2", {
  columnA: String,
  columnB: String,
  createdAt: Date
});

new dummy({
  columnA: "A",
  columnB: "B",
  createdAt: Date.now()
}).save();