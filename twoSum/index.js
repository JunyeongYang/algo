//배열안에 2개의 값을 더해서 n이 나오는 배열의 인덱스 2개를 리턴
//n은 무조건 1번의 경우에서만 나온다.

function twoSum(arr, sum){
  const obj = {};
  arr.forEach(el => obj[sum-el] = el);
  for(let i = 0; i < arr.length; i++) {
    if(obj.hasOwnProperty(arr[i])) {
      let arr2 = [];
      arr2.push(arr.indexOf(arr[i]));
      arr2.push(arr.indexOf(obj[arr[i]]));
      return arr2;
      //복수 값 리턴 해야함.
    }
  }
}

console.log(twoSum([1,2,5,7,3], 5));
