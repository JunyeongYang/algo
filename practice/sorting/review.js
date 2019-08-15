const inputData = [1, 2, 3, 10, 10, 5, 9, 8, 7, 7, 6, 4, 3, 2, 9]
const inputData2 = [1, 2, 3, 10, 10, 5, 9, 8, 7, 7, 6, 4, 3, 2, 9]

class bubbleSort{
  constructor(arr){
    this.sort(arr);
  }

  sort(arr){
    let temp, count=0;
    
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - 1; j++){
        if(arr[j] > arr[j+1]){
          temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
          count++;
        }
      }
    }
    console.log(arr, 'count:', count);
  }
}

class insertionSort{
  constructor(arr){
    this.sort(arr);
  }

  sort(arr){
    let j, temp, count=0;
    for(let i = 0; i < arr.length; i++){
      j = i;
      while(arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        j--;
        count++;
        if(j < 0) break;
      }
    }
    console.log(arr, 'count:', count);
  }
}


new bubbleSort(inputData);
new insertionSort(inputData2);