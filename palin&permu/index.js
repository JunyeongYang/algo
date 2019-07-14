//주어진 문자열이 회문의 순열인지 아닌지 확인하는 함수를 작성하라.
//회문이란 아픙로 읽으나 뒤로 읽으나 같은 단어 혹은 구절을 의미하며,
//순열이란 문자열을 재배치하는 것을 뜻한다.
//회문이 꼭 사전에 등장하는 단어로 제한될 필요는 없다.

//회문 테스트
function palindrome(str) {
  if(!str.length) return false
  const arr = str.replace(/ /g,'').split('')
  const revertArr = revert(...arr)
  for(let i = 0; i < arr.length; i++) {
    if(revertArr[i] !== arr[i]) return false
  }
  return true
}

function revert(...arr) {
  const resArr = []
  while(arr.length) {
    resArr.push(arr.pop())
  }
  return resArr
}

//정답
function solution(str) {
  // 1. 각 문자열이 몇번 등장하였는지 알아낸다.
  // 조건 1. 문자열의 길이가 짝수면 각문자열도 짝수번 등장해야 true
  // 조건 2. 문자열의 길이가 홀수면 하나의 알파벳만 홀수번 등장해야 true

  let arr = str.replace(/ /g, '').split('')
  //각 문자열이 몇번 등장하였는지 체크
  //해쉬테이블 형태로 객체에 저장
  const obj = {}
  arr = arr.map(el => {
    if(obj[el.charCodeAt()]) 
      obj[el.charCodeAt()] = obj[el.charCodeAt()] + 1
    else 
      obj[el.charCodeAt()] = 1
  })

  const countingArr = Object.values(obj)
  let boolResult = false
  for(let i in countingArr) {
    if(countingArr[i] % 2) {
      if(boolResult) {
        return false
      }
      boolResult = true
    }
  }

  return true
}

console.log(solution('nnnnaaaa'))