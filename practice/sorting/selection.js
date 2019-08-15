// 가장 작은것을 선택해서 제일 앞으로 보냄
// 시간 복잡도 : O(N^2)

const inputData = [1, 10, 10, 5, 8, 7, 7, 6, 4, 3, 2, 9]

class selectionSort{
  constructor(arr){
    this.sort(arr);
  }

  sort(arr){
    let index, temp, count = 0;
    for(let i = 0; i < arr.length; i++) {
      let min = 9999;
      for(let j = i; j < arr.length; j++) {
        if(min > arr[j]) {
          min = arr[j];
          index = j;
        }
        count++;
      }
      temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
    console.log(arr, 'count:', count);
  }
}

new selectionSort(inputData);