function binarySearch(arr, n){
  const p = parseInt(arr.length / 2)
  if(arr[p] === n)  return arr[p]

  if(arr[p] > n) {
    for(let i = p; i < arr.length; i++) 
      arr.pop()
    return binarySearch(arr, n)
  } else {
    for(let i = 0; i <= p; i++) 
      arr.shift()
    return binarySearch(arr,n)
  }
}

console.log(binarySearch([134,234,334,434,534,634,734,834,934], 9))