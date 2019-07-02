// 옆에 있는 값과 비교해서 더 작은 값을 앞으로 보내기
// 효율성 완전 0
// p.s. 오름차순으로 정렬
// 시간 복잡도 O=n^2

const inputData = [1, 10, 10, 5, 8, 7, 7, 6, 4, 3, 2, 9]

class bubbleSort{
	constructor(arr){
		this.sort(arr);
	}

	sort(arr){
		let temp;
		for(let i = 0; i < arr.length; i++){
			for(let j = 0; j < arr.length-1; j++){
				if(arr[j] > arr[j+1]){
					//swapping
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
					console.log(arr);
				}
			}
		}
		console.log(arr)
	}
}

new bubbleSort(inputData);