// 문자열 역순으로 뽑아내기

function revertString(){
  const str = 'ksjdflsdjfij';
  const arr = str.split('');
  const res = new Array();
  while(arr.length) {
    res.push(arr.pop());
  }
  console.log(res);
}

revertString();