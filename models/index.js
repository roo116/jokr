const User = require("./User");
const Joke = require("./Joke");
const SavedJoke = require("./SavedJoke");
const JokeCat = require("./JokeCat");

JokeCat.hasMany(Joke, {
  foreignKey: "category_id",
});

Joke.belongsTo(JokeCat, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// User.belongsToMany(Joke, {
//   foreignKey: "joke_id",
// });

// Joke.belongsToMany(User, {
//   through: SavedJoke,
//   as: "jokes",
//   foreignKey: "user_id",
// });


module.exports = {
  User,
  Joke,
  SavedJoke,
  JokeCat,
};
