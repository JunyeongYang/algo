// Task description
// Given a word, calculate the smallest number of letters that must be removed in order for the letters of the remaining word to be sorted in lexicographical order. The resulting word need not appear in the dictionary of any particular language.
// Write a function:
// function solution(S);
// that, given string S, returns the minimum number of letters that must be removed.
// For example, given "banana" the function should return 3, because we can remove three letters (the 1st, 3rd and 6th) to get the word "aan", which is sorted. Please note that it is not possible to remove fewer than three letters.
// Write an e cient algorithm for the following assumptions: the length of S is within the range [1..100,000];
// string S consists only of lower-case letters (a−z).

function solution(S) {
  if(S.length <= 3) return 0
  let arr = []
  
  S.split('').forEach(el => {
      if(!arr.length) {
          arr.push(el.charCodeAt())
      } else {
          if(el.charCodeAt() >= arr[arr.length-1]) {
              arr.push(el.charCodeAt())
          }
      }
  })
  
  if(arr.length === S.length) {
      return S.length - 3
  } else {
      return S.length - arr.length
  }
}


// test case
// 'banana'