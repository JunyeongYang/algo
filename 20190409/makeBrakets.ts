
// 정수 n이 주어지면, n개의 여는 괄호 "("와 n개의 닫는 괄호 ")"로 만들 수 있는 괄호 조합을 모두 구하시오. (시간 복잡도 제한 없습니다).
// Given an integer N, find the number of possible balanced parentheses with N opening and closing brackets.

// 예제)
// Input: 1
// Output: ["()"]

// Input: 2
// Output: ["(())", "()()"]

// Input: 3
// Output: ["((()))", "(()())", "()(())", "(())()", "()()()"]

class MakeBrackets{
  constructor(arr:String[], n:Number){
      this.recMakeIt(arr, "", 0, 0, n);
  }

  private recMakeIt(arr:String[], bracket:String, open:Number, close:Number, n:Number){
    if(bracket.length === Number(n)*2){
      arr.push(bracket.toString());
      return;
    }

    if(open < n){
      this.recMakeIt(arr, bracket+'(', Number(open)+1, close, n);
    }

    if(close < open){
      this.recMakeIt(arr, bracket+')', open, Number(close)+1, n);
    }
  }
}

(()=>{
  const arr = [];
  new MakeBrackets(arr, 3);
  console.log(arr);
})();