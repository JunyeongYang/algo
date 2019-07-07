// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" 
// if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// from: https://www.codewars.com/kata/duplicate-encoder/train/javascript

function duplicateEncode2(word){
  word = word.toLowerCase().split('');
  let res = [];
  for(let i = 0; i < word.length; i++) {
    let count = 0;
    for(let j = 0; j < word.length; j++) {
      if(i !== j && word[i] === word[j]) {
        count++};
    }
    if(count > 0) {
      res[i] = ')'
    } else {
      res[i] = '('
    }
  }
  return res.join('');
}

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
    .join('');
}

console.log(duplicateEncode('sucess'));
