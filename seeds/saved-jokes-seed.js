const { SavedJoke } = require("../models");

const savedJokeData = [
  {
    user_id: 1,
    joke_id: 6,
  },
//   {
//     user_id: 1,
//     joke_id: 7,
//   },
//   {
//     user_id: 1,
//     joke_id: 8,
//   },
//   {
//     user_id: 2,
//     joke_id: 6,
//   },
//   {
//     user_id: 3,
//     joke_id: 1,
//   },
//   {
//     user_id: 3,
//     joke_id: 3,
//   },
//   {
//     user_id: 3,
//     joke_id: 4,
//   },
//   {
//     user_id: 3,
//     joke_id: 5,
//   },
//   {
//     user_id: 4,
//     joke_id: 1,
//   },
//   {
//     user_id: 4,
//     joke_id: 2,
//   },
//   {
//     user_id: 4,
//     joke_id: 8,
//   },
//   {
//     user_id: 5,
//     joke_id: 3,
//   },
];

const seedSavedJokes = () => SavedJoke.bulkCreate(savedJokeData);

module.exports = seedSavedJokes;
