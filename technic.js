// 출처: https://youtaekjung.github.io/2018/05/04/js/JS-algorithm-technic/

//Set 이라는 자료형을 활용해 중복을 제거할 수 있다.
function deleteDuplicate() {
  const arr = [1,2,3,1,2,3,1,2,3];
  const newArr = [...new Set(arr)];

  console.log(newArr);
}

//배열이나 문자열에서 유니크한 원소 뽑아내기
function getUniqueEl() {
  let arr = [1,1,4,1,1];
  let str = '11411';
  arr = arr.filter( el => 
    arr.indexOf(el) === arr.lastIndexOf(el)
  );

  str = str.split('').filter( el =>
    str.indexOf(el) === str.lastIndexOf(el)
  );

  console.log(arr , str);
}

//배열이나 문자열에서 i번째 인덱스 내용을 삭제하고 싶을때
//원본을 보존하면서
function slice() {
  const arr = [1,2,3,4,5];
  const newArr = [...arr.slice(0,2), ...arr.slice(3)];

  console.log(newArr);
}

// 배열에 규칙적인 연속된 값 할당하기
function fillNmap() {
  const arr = Array(5).fill(1).map( (el, i) => 
    el + i
  )
  console.log(arr);
}

deleteDuplicate();
getUniqueEl();
slice();
fillNmap();