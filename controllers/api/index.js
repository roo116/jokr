const router = require("express").Router();

const userRoutes = require("./user-routes");
const jokeRoutes = require("./joke-routes");
const categoryRoutes = require("./category-routes");
const savedJokesRoutes = require("./saved-jokes-routes");

router.use("/users", userRoutes);
router.use("/jokes", jokeRoutes);
router.use("/category", categoryRoutes);
router.use("/savedjokes", savedJokesRoutes);

module.exports = router;