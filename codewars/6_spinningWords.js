// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// from: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(str){
  const arr = str.split(' ');
  let res = '';
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 5) {
      let rev = arr[i].split('');
      const temp = [];
      for(let j = 0; j < arr[i].length; j++) {
        temp[j] = rev.pop();
      }
      res += ' ' + temp.join('');
    } else {
      res += ' ' + arr[i];
    }
  }
  return res.trim();

}

// 1등 답변 => 속도적인 면에서 큰 차이 없음.
function spinWords2(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

console.time()
console.log(spinWords2("Hey fellow warriors"));
console.timeEnd()