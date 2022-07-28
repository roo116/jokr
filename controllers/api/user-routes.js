const router = require("express").Router();
const { User, Joke } = require("../../models");
const SavedJoke = require("../../models/SavedJoke");

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put("/", (req, res) => {
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.session.id,
//     },
//   })
//   .then((dbUserData) => {
//     if (!dbJokeData) {
//       res.status(404).json({ message: "No user found with this id" });
//       return;
//     }

//   })
// })

// get 1 users
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: ["username", "joke_id"],
    where: {
      id: req.params.id,
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
      res.json(dbJokeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add user
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add new user
// router.post("/", (req, res) => {
//   User.create(req.body)
//     .then((user) => {
//       // if there's joke ids, we need to create pairings to bulk create in the SavdeJoke model
//       if (req.body.jokeIds && req.body.jokeIds.length) {
//         const savedJokeIdArr = req.body.jokeIds.map((joke_id) => {
//           return {
//             user_id: user.id,
//             joke_id,
//           };
//         });
//         return SavedJoke.bulkCreate(savedJokeIdArr);
//       }
//       // if no joke ids, just respond
//       res.status(200).json(user);
//     })
//     .then((savedJokeIds) => res.status(200).json(savedJokeIds))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

router.put("/:id", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.session.user_id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/logout", (req, res) => {
  console.log(">>>logout session", req.session);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
