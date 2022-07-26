const sequelize = require("../config/config.js");
const { Model, DataTypes } = require("sequelize");
const JokeCat = require("./JokeCat.js");

class Joke extends Model {}

// create fields/columns for joke model
Joke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // category_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    setup: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    punchline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "jokecat",
        key: "id",
      },
      // },
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "joke",
  }
);

module.exports = Joke;
