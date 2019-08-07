function solution(A) {
  let saddlePoint = 0
  for(let i = 1; i < A.length - 1; i++) {
      const innerA = A[i]
      for(let j = 1; j < innerA.length -1; j++) {
          const temp = A[i][j]
          const colBiggest    = temp > A[i-1][j] && temp > A[i+1][j]
          const colSmallest   = temp < A[i-1][j] && temp < A[i+1][j]
          const rowBiggest    = temp > A[i][j-1] && temp > A[i][j+1]
          const rowSmallest   = temp < A[i][j-1] && temp < A[i][j+1]
          
          if(colBiggest && rowSmallest)       saddlePoint++
          else if(colSmallest && rowBiggest)  saddlePoint++
      }
  }
  return saddlePoint
}

// test case
// [[0]]
// [[0,0,0,0],[0,2,1,3],[0,0,0,0]]
// [[1,1],[1,1]]
// [[0,0],[0,0]]
// [[0,0,0,0],[2,1,3,0],[0,0,0,0]]
// [[1,2,3,4,5,3,6,1,23,4,1]]