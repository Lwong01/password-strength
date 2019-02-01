const { timeThis } = require('./time-this');

function generateWordList(alphabet, length) {
  const wordList = alphabet.split('');
  let lastGen = [...wordList];

  for (let i=1; i < length; i++) {
    let nextGen = [];
    alphabet.split('').forEach(char => {
      lastGen.forEach(word => {
        nextGen.push(word + char);
      });
    });

    // Normal push/concat doesn't work
    // because we run out of memory pretty quickly 😬
    nextGen.forEach(word => wordList.push(word));
    lastGen = [...nextGen];
  }
  return wordList;
}

// Usage example:
// Generates an array of all combinations
//  of 'a', 'b', and 'c', up to 3 characters long.
// So 'a', 'bc', 'cab', 'bbb', etc. will all be in there.
const testAlphabet = 'abc';
const wordList = timeThis(() => generateWordList(testAlphabet, 3), "Generating this word list took");
console.log(`This list has ${wordList.length} words in it.`);

exports.wordList = wordList;
exports.generateWordList = generateWordList;
