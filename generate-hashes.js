const { timeThis } = require('./time-this');
const md5 = require('md5');
const { wordList } = require('./generate-word-list.js');

function generateHashes(wordList, salt='') {
  wordList.map(word => md5(salt + word));
}

const hashes = timeThis(() => generateHashes(wordList), "Generating this hash list took");

exports.generateHashes = generateHashes;
