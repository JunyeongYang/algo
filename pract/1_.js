function solution(arr) {
  let saddlePoint = 0
  for(let i = 1; i < arr.length-1; i++) {
    for(let j= 1; j < arr.length-1; j++) {
      if(arr[i][j] > arr[i-1][j] && arr[i][j] > arr[i+1][j] 
          && arr[i][j] < arr[i][j-1] && arr[i][j] < arr[i][j+1])      saddlePoint++
          
      else if(arr[i][j] < arr[i-1][j] && arr[i][j] < arr[i+1][j] 
          && arr[i][j] > arr[i][j-1] && arr[i][j] > arr[i][j+1])      saddlePoint++
    }
  }
  return saddlePoint
}

const arr = [[0,1,9,3,5],[7,5,8,3,6],[9,2,9,4,7],[4,6,7,1,8]]

console.log(solution(arr));