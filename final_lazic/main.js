"use strict"

const express = require("express"),
app = express(),
errorController = require("./controllers/errorController"),
homeController = require("./controllers/homeController"),
reviewController = require("./controllers/reviewController"),
layout = require("express-ejs-layouts"),
mongoose = require("mongoose"),
Review = require("./models/reviewer");

mongoose.connect("mongodb+srv://slazic:f0und3r260@cluster0.dtbmc.mongodb.net/finalProjectDB?retryWrites=true&w=majority")

const work = mongoose.connection;

work.once("open", () => {
    console.log("Successfully Connected To Database")
})

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layout);
app.use(
    express.urlencoded({
        extended: false
    })
)

app.use(express.json())

app.get("/reviewers", reviewController.getReviews, (req, res, next) =>{
    res.render("reviewers", {reviewers: req.data});
})

app.get("/", homeController.index);
app.get("/menu", homeController.showMenu);
app.get("/location", homeController.showLocation);
app.get("/chefs", homeController.showChefs);
app.get("/wholesale", homeController.showWholesale);
app.get("/about", homeController.showAboutPage)

app.get("/contact", reviewController.getReviewPage);
app.post("/review", reviewController.saveReviews)


app.use(errorController.logError);
app.use(errorController.noPageFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () =>{
    console.log(`Server running at http://localhost:${app.get("port")}`);
});