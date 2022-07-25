const sequelize = require("../config/config.js");
const { Model, DataTypes } = require("sequelize");

class SavedJoke extends Model {}

// create fields/columns for saved joke model
SavedJoke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    setup: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    punchline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: "user",
      //   key: "id",
      // },
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