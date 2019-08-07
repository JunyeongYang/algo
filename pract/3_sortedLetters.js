function solution(s) {
  const arr = []
  let prev = ''
  s.split('').forEach(el => {
    if(!arr.length) {
      console.log(el)
      arr.push(el.charCodeAt())
    } else {
      if(el.charCodeAt() > prev) {
        arr.pop()
      }
      prev = el.charCodeAt()
      arr.push(el.charCodeAt())
    }
  })
  console.log(arr)
  return arr.length
}

let str = 'ab'

function sol2(S) {
  if(S.length < 3) return 0
  
  let arr = []
  S.split('').forEach(el => {
      if(!arr.length) {
          arr.push(el.charCodeAt())
      } else {
          if(el.charCodeAt() >= arr[arr.length-1]) {
              arr.push(el.charCodeAt())
          }
      }
  })

  console.log(arr)
  
  if(arr.length === S.length) {
      return S.length - 3
  } else {
      return S.length - arr.length
  }

}


console.log(sol2(str));

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
        for (let i = 0; i < n; i++ ) {
          console.log(lis[i])
          if (result < lis[i]) 
              result = lis[i]; 
        }
      
                console.log(lis)
        return result; 
    } 
    
// console.log(listt([30, 40, 2, 5, 1, 7, 45, 50, 8],9))
// console.log(solution('banana'))




// function getSmallestNoletters(str) {
//   let longestSubString = 'abc';
//     for (let i = 0; i < str.length(); i++) {
//         StringBuilder sbuStr = new StringBuilder();
//         sbuStr.append(str.charAt(i));
//         for (int j = i + 1; j < str.length(); j++) {
//             System.out.println("1: " + sbuStr);
//             if (sbuStr.charAt(sbuStr.length() - 1) <= str.charAt(j)) {
//                 sbuStr.append(str.charAt(j));
//                 System.out.println(sbuStr);
//             } else if (sbuStr.length() > 1 && sbuStr.charAt(sbuStr.length() - 2) <= str.charAt(j)) {
//                 sbuStr.deleteCharAt(sbuStr.length() - 1);
//                 sbuStr.append(str.charAt(j));
//             }
//         }
//         if (sbuStr.length() > longestSubString.length())
//             longestSubString = sbuStr.toString();
//     }
//     int ans = str.length() - longestSubString.length();
//     System.out.println("Ans: " + ans);
//    return ans;
//  }
let arr = []
function s(S) {
  if(S.length === 0) return;
  S.split('').forEach(el => {
    if(!arr.length) {
      arr.push(el.charCodeAt())
    } else {
      if(el.charCodeAt() >= arr[arr.length-1]) {
        arr.push(el.charCodeAt())
      }
    }
  })
}




function so(S) {
  let removeCount = 0
  for(let i in S) {
    console.log(S[i])
    let currentSpell = S[i]
    if(i == 0) {
      if(currentSpell > S[i+1]) {
        removeCount++;
      }
    } else if (i == S.length -1) {
      if(currentSpell < S[i-1]) {
        removeCount++
      }
    } else {
      if(S[i-1] > currentSpell || currentSpell > S[i+1]) {
        removeCount++
      }
    }
  }
  return removeCount
}
console.log(so(str))