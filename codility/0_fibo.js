function solution(n) {
  if(n==0) return 0
  let first = 0
  let second = 1
  for(let i = 2; i < n; i++) {
      let third = first + second
      first = second
      second = third
  }
  return first + second
}

console.log(solution(3))