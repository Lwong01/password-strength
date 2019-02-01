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

const testAlphabet = 'abc';


const wordList = generateWordList(testAlphabet, 3);

exports.generateWordList = generateWordList;
