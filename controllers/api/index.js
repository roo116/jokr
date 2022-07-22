const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// const jokeRoutes = require('./joke-routes');

router.use('/user', userRoutes);
// router.use('/post', jokeRoutes);

module.exports = router;