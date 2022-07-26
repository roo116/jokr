const router = require("express").Router();
const { Joke, SavedJoke, JokeCat } = require("../../models");
// const { restore } = require("../../models/User");

router.get("/", (req, res) => {
  console.log("======================");
  JokeCat.findAll({
    include: {
      model: Joke,
      attributes: ["id", "setup", "punchline", "category_id"],
    },
  })
    .then((dbJokeCatData) => res.json(dbJokeCatData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  JokeCat.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Joke,
      attributes: ["id", "setup", "punchline", "category_id"],
    },
  })
    .then((dbJokeCatData) => {
      if (!dbJokeCatData) {
        res.status(404).json({ message: "ID not found" });
        return;
      }
      res.json(dbJokeCatData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  JokeCat.create({
    category_name: req.body.category_name,
    setup: req.body.setup,
    punchline: req.body.punchline,
    user_id: req.body.user_id,
  })
    .then((dbJokeCatData) => res.json(dbJokeCatData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  JokeCat.update({
    where: {
      id: req.params.id,
    },
  })
    .then((savedjoke) => {
      return SavedJoke.findAll({ where: { joke_id: req.params.id } });
    })
    .then((savedJokes) => {
      const savedJokesIds = savedJokes.map(({ user_id }) => user_id);
    });
  const newSavedJokes = req.body.userIds
    .filter((user_id) => !savedJokesIds.includes(user_id))
    .map((user_id) => {
      return {
        joke_id: req.params.id,
        user_id,
      };
    });
});

router.delete("/:id", (req, res) => {
  JokeCat.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbJokeData) => {
      if (!dbJokeData) {
        res.status(404).json({ message: "id not found" });
      }
      res.json(dbJokeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
