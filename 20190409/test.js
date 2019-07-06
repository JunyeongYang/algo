class new2 {
  constructor(arr) {
    console.log(this.start(arr));
  }

  start(arr) {
    const arr2 = arr.split('');
    let count = 0;
    console.log(arr2.length);

    for(let i = 0; i < arr2.length; i++) {
      if(arr2[i] === '(') count++
      else  count--;
    }
    
    if(count < 0) return false;
    return true;
  }
}

new new2('((())()))(');