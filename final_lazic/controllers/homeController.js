const res = require("express/lib/response");

exports.index = (req, res) => {
    res.render("index");
}

exports.showMenu = (req, res) => {
    res.render("menu");
}

exports.showWholesale = (req, res) => {
    res.render("wholesale");
}

exports.showLocation = (req, res) => {
    res.render("location");
}

exports.showChefs = (req, res) => {
    res.render("chefs")
}

exports.showAboutPage = (req, res) => {
    res.render("about")
}