function hanoi(n, from, temp, to) {
  if(n === 1) console.log(`${n}을 ${from}에서 ${to} 로 return`)
  else {
    hanoi(n-1, from, to, temp)
    console.log(`${n}을 ${from}에서 ${to} 로`)
    hanoi(n-1, temp, from, to)
  }
}

hanoi(4, 'A', 'B', 'C')