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

// router.delete("/:id", (req, res) => {
//     SavedJoke.destroy({
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((savedJokeData) => {
//         if (!savedJokeData) {
//           res.status(404).json({ message: "No user found with this id" });
//           return;
//         }
//         res.json(savedJokeData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });



module.exports = router;
