// 퀵정렬
// 특정한 값을 기준으로 큰 숫자와 작은 숫자를 나눔
// 피벗(Pivot)을 첫번째로 설정
// 피벗보다 큰값을 피벗 기준 오른쪽으로 찾음, 피벗보다 작은값을 가장 오른쪽(마지막 인덱스)부터 -- 하면서 찾음
// 찾으면 서로 값을 바꿔줌
// 만약 큰값과 작은값이 교차하게 되면(작은값의 인덱스가 큰값의 인덱스보다 작은경우) 피벗을 작은값의 인덱스와 바꿔줌
// 그럼 피벗은 정렬이 된 상태
// 피벗을 기준으로 2개의 경우로 나눠서 다시 정렬 시작 << 포인트!!
// 시간복잡도 O(N*logN)

const inputData = [11, 1, 10, 10, 5, 8, 7, 7, 6, 4, 3, 2, 9]

class quickSort1{
  constructor(arr){
    this.sort(arr, 0, arr.length - 1);
  }

  sort(arr, start, end){
    if(start >= end) { // 원소가 1개인 경우
      return;
    }

    let pivot = start;  // pivot!
    let i = start + 1;  // 피벗의 다음값을 찾아야 하기 때문에 +1을 해줌
    let j = end;        // 오른쪽부터 찾아야 하기 때문에 end를 줌
    let temp;           // swapping 용

    while (i <= j) {  //엇갈릴때까지 반복
      while(arr[i] <= arr[pivot]) { //피벗보다 작다면 오른쪽으로 이동시켜야함 = 큰값을 찾기
        i++;
      }

      while(arr[j] >= arr[pivot] && j > start) { //피벗보다 크다면 왼쪽으로 이동시켜야함 = 작은값 찾기
        j--;
      }

      if(i > j) { 
        /**
         * 엇갈린 상태!
         * 피벗보다 작은 값의 인덱스가 
         * 피벗보다 큰 값의 인덱스보다 작으면
         * 피벗의 위치를 바꿔줘야함.
         */
        temp = arr[j];
        arr[j] = arr[pivot];
        arr[pivot] = temp;
      } else {
        /**
         * 엇갈린 상태가 아니라면!
         * 피벗보다 큰값과 작은값을 바꿔주기만 하면 끝
         */
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(arr)
    this.sort(arr, start, j - 1);
    this.sort(arr, j + 1, end);
  }
}

//제일 우측을 피벗으로 설정
class quickSort2 {
  constructor(arr) {
    this.sort(arr, 0, arr.length-1);
    console.log(arr);
  }

  sort(arr, left, right) {
    if(left < right) {
      const p = this.partition(arr, left, right);

      this.sort(arr, left, p - 1);
      this.sort(arr, p + 1, right)
    }
  }

  partition(arr, left, right) {
    const pivot = arr[right];
    let i = (left - 1);

    for(let j = left; j <= right - 1; j ++) {
      if(arr[j] <= pivot) {
        i++;
        this.swap(arr, i, j);
      }
    }
    this.swap(arr, i + 1, right);
    return (i + 1);
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

new quickSort2(inputData);