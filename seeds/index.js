const seedUsers = require('./user-seeds');
const seedJokes = require('./joke-seeds');
const seedJokeCat = require('./joke-cat-seed')

const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedJokeCat();
    console.log('---------------');
    
    await seedJokes();
    console.log('--------------');

    await seedUsers();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();