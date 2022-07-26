const router = require("express").Router();
const sequelize = require("sequelize");
const { User, SavedJoke, JokeCat, Joke } = require("../models/");

// get the html for the search page
router.get("/", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  console.log("======================");
  JokeCat.findAll()
    .then((dbJokeCatData) => {
      const categories = dbJokeCatData.map((category) =>
        category.get({ plain: true })
      );

      res.render("search-joke", {
        categories,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
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
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
