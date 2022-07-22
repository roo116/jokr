const sequelize = require("../config/connection");
const { User, Joke } = require("../models");

const jokedata = [
  {
    category_name: "Knock Knock",
    setup: "Knock Knock. Who's there? Interrupting cow. Interrupting c-",
    punchline: "MOO!",
    user_id: "",
  },
  {
    category_name: "Knock Knock",
    setup: "Knock, Knock. Who’s there? Nobel. Nobel who?",
    punchline: "Nobel…that’s why I knocked!",
    user_id: "",
  },
  {
    category_name: "Knock Knock",
    setup: "Knock, Knock. Who’s there? Tank. Tank who?",
    punchline: "You’re welcome.",
    user_id: "",
  },
  {
    category_name: "Knock Knock",
    setup: "Knock, Knock. Who’s there? Figs. Figs who?",
    punchline: "Figs the doorbell, it’s not working!",
    user_id: "",
  },
  {
    category_name: "Knock Knock",
    setup: "Knock, Knock. Who’s there? A little old lady. A little old lady who?",
    punchline: "Hey, you can yodel!",
    user_id: "",
  },
  {
    category_name: "Knock Knock",
    setup: "Knock, Knock. Who’s there? Water. Water who?",
    punchline: "Water you doing telling jokes right now? Don’t you have things to do?",
    user_id: "",
  },
  {
    category_name: "Dad Jokes",
    setup: "I'm afraid for the calendar.",
    punchline: "Its days are numbered.",
    user_id: "",
  },
  {
    category_name: "Dad Jokes",
    setup: "My wife said I should do lunges to stay in shape.",
    punchline: "That would be a big step forward.",
    user_id: "",
  },
  {
    category_name: "Dad Jokes",
    setup: "Singing in the shower is fun until you get soap in your mouth.",
    punchline: "Then it's a soap opera.",
    user_id: "",
  },
  {
    category_name: "Dad Jokes",
    setup: "I thought the dryer was shrinking my clothes.",
    punchline: "Turns out it was the refrigerator all along.",
    user_id: "",
  },
  {
    category_name: "Dad Jokes",
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved.",
    user_id: "",
  },
  {
    category_name: "Dad Jokes",
    setup: "I only know 25 letters of the alphabet.",
    punchline: "I don't know y.",
    user_id: "",
  },
  {
    category_name: "Dark Humor",
    setup: "My grief counselor died.",
    punchline: "He was so good, I don’t even care.",
    user_id: "",
  },
  {
    category_name: "Dark Humor",
    setup: "Today, I asked my phone 'Siri, why am I still single?'",
    punchline: "It activated the front camera.",
    user_id: "",
  },
  {
    category_name: "Dark Humor",
    setup: "My mom died when we couldn’t remember her blood type.",
    punchline: "As she died, she kept telling us to “be positive,” but it’s hard without her.",
    user_id: "",
  },
  {
    category_name: "Dark Humor",
    setup: "Why did the man miss the funeral?",
    punchline: "He wasn’t a mourning person.",
    user_id: "",
  },
  {
    category_name: "Dark Humor",
    setup: "It’s important to establish a good vocabulary.",
    punchline: "If I had known the difference between the words “antidote” and “anecdote,” one of my best friends would still be alive.",
    user_id: "",
  },
  {
    category_name: "Dark Humor",
    setup: "Give a man a match, and he’ll be warm for a few hours.",
    punchline: "Set him on fire, and he will be warm for the rest of his life.",
    user_id: "",
  },
];

const seedJokes = () => Joke.bulkCreate(jokedata, { individualHooks: true });

module.exports = seedJokes;
