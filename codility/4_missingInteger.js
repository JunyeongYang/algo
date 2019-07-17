// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  let obj = {}
  for(let a of A) {
    if(a > 0)  obj[a] = a
  }

  if(Object.keys(obj).length < 1) return 1

  let count = 1
  for(let i = 1; i <= A.length; i++) {
    if(!obj.hasOwnProperty(i)) return i
    count++
  }

  return count
}

console.log(solution([1,2,3]))

// [-1,-2,1,24,1,2,4,1]
// [-1,-3]