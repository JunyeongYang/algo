function binarySearch(arr, n){
  const p = parseInt(arr.length / 2)
  if(arr[p] === n)  return p

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

function binary2(arr, n) {
  const p = parseInt(arr.length / 2)
  if(!p) return false
  if(arr[p] === n) return true
  
  if(arr[p] > n)  return binary2(arr.splice(0, p), n)
  else            return binary2(arr.splice(p+1, arr.length), n)
}

function binary(arr, n, start, end) {
  const p = Math.floor((start+end) / 2)
  if(arr[p] === n) return p
}

console.log(binary2([134,234,334,434,534,634,734,834,934], 2))