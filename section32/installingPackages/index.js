const jokes = require('give-me-a-joke');
const colors = require('colors');
// To get a random dad joke
jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});