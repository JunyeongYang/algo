function solution(s,k) {
  if(!s) return -1
  s = s.replace(/ +/g, " ").trim()
  const arr = s.split(' ')
  let resCount = 0
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    let sLeng = arr[i].length
    if(sLeng > k) return -1
    count += sLeng
    let nextSLeng = arr[i+1]? arr[i+1].length: 0
    if(count + nextSLeng > k) {
      resCount++
      count = 0
    } else if(!arr[i+1]) {
      resCount++
    }
  }

  return resCount
}

const str = 'SMS messages are really short'
console.log(solution(str,12))