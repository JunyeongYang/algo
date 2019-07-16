// An array A consisting of N integers is given. 
// It contains daily prices of a stock share for a period of N consecutive days. 
// If a single share was bought on day P and sold on day Q, where 0 ≤ P ≤ Q < N, 
// then the profit of such transaction is equal to A[Q] − A[P], provided that A[Q] ≥ A[P].
// Otherwise, the transaction brings loss of A[P] − A[Q].

// For example, consider the following array A consisting of six elements such that:

//   A[0] = 23171
//   A[1] = 21011
//   A[2] = 21123
//   A[3] = 21366
//   A[4] = 21013
//   A[5] = 21367
// If a share was bought on day 0 and sold on day 2, a loss of 2048 would occur because A[2] − A[0] = 21123 − 23171 = −2048. 
// If a share was bought on day 4 and sold on day 5, a profit of 354 would occur because A[5] − A[4] = 21367 − 21013 = 354. 
// Maximum possible profit was 356. It would occur if a share was bought on day 1 and sold on day 5.

function solution(A) {
  const resArr = []
  for(let i = 0; i < A.length; i++) {
      for(let j = i+1; j < A.length; j++) {
        resArr.push(A[j] - A[i])
      }
  }
  return parseInt(Math.max(...resArr))
}

function solution2(A) {
  let min = 1000000000000000;
  let res = 0;
  for(let i of A) {
    min = Math.min(min, i)
    res = Math.max(res, i - min)
  }
  return res
}

const arrInput = [23171, 21011, 21123, 21366, 21013, 21367]
console.log(solution2(arrInput))