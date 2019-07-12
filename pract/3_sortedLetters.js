function solution(s) {
  const arr = []
  let prev = ''
  s.split('').forEach(el => {
    if(!arr.length) {
      console.log(el)
      arr.push(el.charCodeAt())
    } else {
      if(el.charCodeAt() > el.charCodeAt()) {
        arr.pop()
      }
      prev = el.charCodeAt()
      arr.push(el.charCodeAt())
    }
  })
  console.log(arr)
  return arr.length
}

function listt( arr, n ) 
    { 
        let result = 0; 
        lis = []; 
        // arr = arr.split('').map(el => el.charCodeAt())
        // console.log(arr)
      
        /* Initialize LIS values  
        for all indexes */
        for (let i = 0; i < n; i++ ) 
            lis[i] = 1; 
      
        /* Compute optimized LIS  
           values in bottom up manner */
        for (let i = 1; i < n; i++ ) 
            for (let j = 0; j < i; j++ ) 
                if ( arr[i] >= arr[j] && 
                    lis[i] <= lis[j] + 1) 
                    lis[i] = lis[j] + 1; 
      
        /* Pick resultimum of 
        all LIS values */
        for (let i = 0; i < n; i++ ) 
            if (result < lis[i]) 
                result = lis[i]; 
      
                console.log(lis)
        return result; 
    } 
    
console.log(listt([30, 40, 2, 5, 1, 7, 45, 50, 8],9))

