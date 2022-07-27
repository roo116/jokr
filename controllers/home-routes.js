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
  // console.log(req.session.user_id);
  JokeCat.findAll()
    .then((dbJokeCatData) => {
      // console.log(dbJokeCatData);
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
  // if (!req.session.loggedIn) {
  //   res.redirect("/login");
  //   return;
  // }
  console.log("======================");
  User.findOne({
    attributes: ["username", "joke_id"],
    where: {
      id: 1,
    },
    include: {
      model: Joke,
      attributes: ["id", "setup", "punchline"],
    },
  })
    .then((dbJokeData) => {
      if (!dbJokeData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      const userData = dbJokeData.get({plain: true});
      const savedJokes = userData.jokes;

      res.render("dashboard", {
        savedJokes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
    })

module.exports = router;
