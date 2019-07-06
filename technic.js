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

getUniqueEl();
deleteDuplicate();