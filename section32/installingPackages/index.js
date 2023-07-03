const jokes = require('give-me-a-joke');
// To get a random dad joke
jokes.getRandomDadJoke (function(joke) {
    console.log(joke);
});