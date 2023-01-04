const Review = require("../models/reviewer.js");

exports.getReviews = (req, res, next) => {
    Review.find({}, (error, reviews) => {
        if(error) next(error);
        req.data = reviews;
        next()
    });
};

exports.getReviewPage = (req, res) => {
    res.render("contact");
}

exports.saveReviews = (req, res) => {
    let newReview = new Review({
        name: req.body.name,
        email: req.body.email,
        review: req.body.review
    })

    newReview.save((error, result) =>{
        if(error) res.send(error);
        res.render("thanks")
    })
}