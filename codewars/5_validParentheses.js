// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// from: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens){
  parens = parens.split('');
  let count = 0;
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === '(') count++;
    else                  count--;
    if(count < 0)         return false;
  }

  return (count === 0);
}

console.log(validParentheses('(())()()'));