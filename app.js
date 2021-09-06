const sentence = "Hello World";
const forbiddenWords = ['truffe', 'truffes', 'confiture'];

function isPalindrom(word) {
  const reversed = word.split('').reverse().join('');
  const result = word === reversed;
  return result;
}

function containsForbiddenWords(message) {
  const messageWords = message.split(' ');
  let detectedForbiddenWords = [];
  for (let index = 0; index < messageWords.length; index++) {
    const word = messageWords[index];
    if (forbiddenWords.includes(word)) {
      detectedForbiddenWords.push(word);
    }
  }
  //   console.log('detectedForbiddenWords', detectedForbiddenWords);
  if (detectedForbiddenWords.length > 0) {
    return true;
  }
  return false;
}

module.exports = {
  sentence,
  isPalindrom,
  containsForbiddenWords,
};