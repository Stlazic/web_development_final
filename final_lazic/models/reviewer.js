const mongoose = require("mongoose"),
reviewSchema = mongoose.Schema({
    name: String,
    email: String,
    review: String
});

module.exports = mongoose.model("Reviewer", reviewSchema);