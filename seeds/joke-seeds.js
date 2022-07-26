const sequelize = require("../config/config");
const { User, Joke } = require("../models");

const jokedata = [
  {
    setup: "Knock Knock. Who's there? Interrupting cow. Interrupting c-",
    punchline: "MOO!",
    category_id: 1,
  },
  {
    setup: "Knock, Knock. Who’s there? Nobel. Nobel who?",
    punchline: "Nobel…that’s why I knocked!",
    categor_id: 1,
  },
  {
    setup: "Knock, Knock. Who’s there? Tank. Tank who?",
    punchline: "You’re welcome.",
    category_id: 1,
  },
  {
    setup: "Knock, Knock. Who’s there? Figs. Figs who?",
    punchline: "Figs the doorbell, it’s not working!",
    category_id: 1,
  },
  {
    setup:
      "Knock, Knock. Who’s there? A little old lady. A little old lady who?",
    punchline: "Hey, you can yodel!",
    category_id: 1,
  },
  {
    setup: "Knock, Knock. Who’s there? Water. Water who?",
    punchline:
      "Water you doing telling jokes right now? Don’t you have things to do?",
    category_id: 1,
  },
  {
    setup: "I'm afraid for the calendar.",
    punchline: "Its days are numbered.",
    category_id: 2,
  },
  {
    setup: "My wife said I should do lunges to stay in shape.",
    punchline: "That would be a big step forward.",
    category_id: 2,
  },
  {
    setup: "Singing in the shower is fun until you get soap in your mouth.",
    punchline: "Then it's a soap opera.",
    category_id: 2,
  },
  {
    setup: "I thought the dryer was shrinking my clothes.",
    punchline: "Turns out it was the refrigerator all along.",
    category_id: 2,
  },
  {
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved.",
    category_id: 2,
  },
  {
    setup: "I only know 25 letters of the alphabet.",
    punchline: "I don't know y.",
    category_id: 2,
  },
  {
    setup: "My grief counselor died.",
    punchline: "He was so good, I don’t even care.",
    category_id: 3,
  },
  {
    setup: "Today, I asked my phone 'Siri, why am I still single?'",
    punchline: "It activated the front camera.",
    category_id: 3,
  },
  {
    setup: "My mom died when we couldn’t remember her blood type.",
    punchline:
      "As she died, she kept telling us to “be positive,” but it’s hard without her.",
    category_id: 3,
  },
  {
    setup: "Why did the man miss the funeral?",
    punchline: "He wasn’t a mourning person.",
    category_id: 3,
  },
  {
    setup: "It’s important to establish a good vocabulary.",
    punchline:
      "If I had known the difference between the words “antidote” and “anecdote,” one of my best friends would still be alive.",
    category_id: 3,
  },
  {
    setup: "Give a man a match, and he’ll be warm for a few hours.",
    punchline: "Set him on fire, and he will be warm for the rest of his life.",
    category_id: 3,
  },
];

const seedJokes = () => Joke.bulkCreate(jokedata, { individualHooks: true });

module.exports = seedJokes;
