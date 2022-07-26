const { Model, DataTypes, DatabaseError } = require("sequelize");
const sequelize = require("../config/config");
class SavedJoke extends Model {}

SavedJoke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    joke_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "joke",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "savedjoke",
  }
);

module.exports = SavedJoke;