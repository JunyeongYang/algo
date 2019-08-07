// function solution(arr) {
//   let saddlePoint = 0
//   for(let i = 1; i < arr.length-1; i++) {
//     for(let j= 1; j < arr.length-1; j++) {
//       if(arr[i][j] > arr[i-1][j] && arr[i][j] > arr[i+1][j] 
//           && arr[i][j] < arr[i][j-1] && arr[i][j] < arr[i][j+1])      saddlePoint++
          
//       else if(arr[i][j] < arr[i-1][j] && arr[i][j] < arr[i+1][j] 
//           && arr[i][j] > arr[i][j-1] && arr[i][j] > arr[i][j+1])      saddlePoint++
//     }
//   }
//   return saddlePoint
// }
const arr = [[0, 0, 0, 0], [2, 1, 3], [0, 0, 0, 0]]

function solution(A) {
  let saddlePoint = 0
  for(let i = 1; i < A.length - 1; i++) {
    let inner = A[i]
      for(let j = 1; j < inner.length -1; j++) {
          const temp = A[i][j]
          const colBiggest = temp > A[i-1][j] && temp > A[i+1][j]
          const colSmallest = temp < A[i-1][j] && temp < A[i+1][j]
          const rowBiggest = temp > A[i][j-1] && temp > A[i][j+1]
          const rowSmallest = temp < A[i][j-1] && temp < A[i][j+1]

          console.log(colBiggest, colSmallest, rowBiggest, rowSmallest)
          if(colBiggest && rowSmallest) {
                  saddlePoint++
          } else if(colSmallest && rowBiggest) {
                  saddlePoint++
          }
      }
  }
  return saddlePoint
}

function a(A) {
  let pointCount = 0;
  for(let lineP in A) {
    let row = A[lineP]
    for(rowQ in row) {
      if(rowQ != 0 && lineP != 0) {
        let numberP = parseInt(lineP)
        let numberQ = parseInt(rowQ)
        let tempA = A[numberP][numberQ-1]
        let tempB = A[numberP][numberQ]
        let tempC = A[numberP][numberQ+1]
        if(typeof A[numberP-1] !== 'undefined' && typeof A[numberP+1] != 'undefined') {
          console.log(2)
          let tempD = A[numberP -1][numberQ]
          let tempE = A[numberP + 1][numberQ]
          if((tempA > tempB && tempB < tempC) && (tempD < tempB && tempB > tempE)) {
            pointCount = pointCount + 1
          } else if((tempA < tempB && tempB > tempC) && (tempD > tempB && tempB < tempE)) {
            pointCount = pointCount + 1
          }
        }
      }
    }
  }
  return pointCount
}




console.log(a(arr));
console.log(solution(arr))