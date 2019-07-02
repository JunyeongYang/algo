//다음번 인덱스가 앞으로 

const inputData = [1, 10, 10, 5, 8, 7, 7, 6, 4, 3, 2, 9]

class insertionSort{
  constructor(arr){
    this.sort(arr);
  }

  sort(arr){
    let j, temp;
    for(let i = 0; i < arr.length-1; i++) {
      j = i;
      while(arr[j] > arr[j+1]){
        //swapping
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        j--;
        console.log(arr, j);
        if(j < 0) break;
      }
    }

    console.log(arr);
  }
}

new insertionSort(inputData);