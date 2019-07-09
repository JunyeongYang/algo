// A string S consisting of N characters is called properly nested if:

// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, string "(()(())())" is properly nested but string "())" isn't.

// Write a function:

// class Solution { public int solution(String S); }

// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

// For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".

function solution(S) {
  const res = []
  const arr = S.split('')

  if(arr.length === 1)                    return 0
  else if(S.length > 1000000)             return 0
  else if( [...new Set(arr)].length > 2)  return 0
  else if(S.length % 2 !== 0)             return 0

  S.split('').forEach( el => {
    if(el === '(')  res.push(el)
    else            res.pop()
  })
  return res.length ? 0 : 1
}

console.log(solution('()()()()'))