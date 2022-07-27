const User = require("./User");
const Joke = require("./Joke");
const SavedJoke = require("./SavedJoke");
const JokeCat = require("./JokeCat");

// associations
   Joke.belongsToMany(User, {
    through: SavedJoke,
  });

User.belongsToMany(Joke, {
  through: SavedJoke,
})

  JokeCat.hasMany(Joke, {
    foreignKey: "category_id",
  });

  Joke.belongsTo(JokeCat, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  });

  
  module.exports = {
    User,
    Joke,
    SavedJoke,
    JokeCat,
  };