function solution(A) {
  const obj = {}
  for(let i = 0; i < A.length; i++) {
      if(obj[A[i]] === undefined) obj[A[i]] = 1
      else obj[A[i]] += 1
  }
  return Object.keys(obj).filter((key,value) => obj[key] % 2 ).toString()
}

console.log(solution([9,3,9,3,9,7,9]))