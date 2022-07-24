const router = require("express").Router();
// const { User } = require("../models/");

// get the html for the search page
router.get("/", (req, res) => {
  console.log(req.session);
  res.render("search-joke");
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
  res.render("dashboard");
});

module.exports = router;
