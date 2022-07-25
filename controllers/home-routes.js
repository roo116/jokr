const router = require("express").Router();
const sequelize = require("sequelize");
const { User, SavedJoke } = require("../models/");

// get the html for the search page
router.get("/", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("search-joke", {
    loggedIn: req.session.loggedIn,
  });
});

// get the html for the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// get html for user dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
