const router = require("express").Router();
const { Joke } = require("../../models");

router.get('/', (req, res) => {
  console.log('======================');
  Joke.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
