

function solution(S, K) {
  if(!S) return -1
  
  S = S.replace(/ +/g, " ").trim()
  const arr = S.split(' ')
  let resCount = 0
  let count = 0
  for(let i = 0; i < arr.length; i++) {
      let sLeng = arr[i].length
      if(sLeng > K) return -1
      
      count += sLeng
      let nextSLeng = arr[i+1] ? arr[i+1].length : 0
      if(count + nextSLeng > K) {
          resCount++
          count = 0
      } else if(!arr[i+1]) {
          resCount++
      }
  }
  return resCount
}

function s(S, K) {
  if(S.length <= K) return -1
  else {
    let tempCheckIdx = 0
    let wholeCheckIdx = 0
    for(let i = 0; i<S.length; i++) {
      tempCheckIdx++;
      if(tempCheckIdx == K) {
        wholeCheckIdx++;
        tempCheckIdx = 0;
      }
    }
    return wholeCheckIdx+1;
  }

}

console.log(solution('a', 1))
console.log(s('a',1))
// test case
// ('',1)
// ('a',1)
// ('klasdjfklasdjfklajsdf lajsdklfj asdklfjaslkdfklsdjklsdjklsdjflasjdflajs dklfjasdklfaskldfalskdjasdjk', 50)
// ('12345678901234567890 1234567890 1234567890123456789012345678901234567890 123456789012345678901234567890', 40)
// ('abc de', 3)
// ('abc', 3)
