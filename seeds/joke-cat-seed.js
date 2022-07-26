const sequelize = require("../config/config");
const { JokeCat } = require("../models");

const jokeCatData = [
  {
    category_name: "Knock Knock",
  },
  {
    category_name: "Dad Jokes",
  },
  {
    category_name: "Dark Humor",
  },
];

const seedJokeCat = () => JokeCat.bulkCreate(jokeCatData, { individualHooks: true });

module.exports = seedJokeCat;