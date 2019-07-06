// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// from: https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits = (int) => {
  const arr = int.toString(2).split('');
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]*1) count++;
  }
  return count;
};


var countBits2 = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};



console.log(countBits(5))