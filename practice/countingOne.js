function countingOne(dec) {
  const bin = dec.toString(2);
  let count = 0;
  bin.split('').forEach(element => {
    if(element * 1) count++;
  });
  return count;
}

console.log(countingOne(120));