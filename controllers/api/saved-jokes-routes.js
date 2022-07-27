const router = require("express").Router();
const { User, Joke } = require("../../models");
const SavedJoke = require("../../models/SavedJoke");

router.post("/", (req, res) => {
  SavedJoke.create({
    joke_id: req.body.joke_id,
    user_id: req.body.user_id,
  })
    .then((savedJokeIds) => res.status(200).json(savedJokeIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});




module.exports = router;
