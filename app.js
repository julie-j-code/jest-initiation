const sentence = "Hello World";
function isPalindrom(word) {
    const reversed = word.split('').reverse().join('');
    const result = word === reversed;
    return result;
  }
  
module.exports ={
    sentence,
    isPalindrom
}