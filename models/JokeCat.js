const sequelize = require("../config/config.js");
const { Model, DataTypes } = require("sequelize");

class JokeCat extends Model {}

// create fields/columns for joke model
JokeCat.init(
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "jokecat",
  }
);

module.exports = JokeCat;
