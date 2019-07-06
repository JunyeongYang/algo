// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// from: https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function formatting(names){
  const arr = [];
  let res = '';
  names.forEach(el => {
    arr.push(el.name);
  });

  if(arr.length === 1) return arr.join('');

  for(let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1)      res += `& ${arr[i]}`;
    else if(i === arr.length - 2) res += `${arr[i]} `
    else                          res += `${arr[i]}, `
  }
  return res;
}

// 1등 답변
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

// 2등 답변
function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}



const data = [ { name: 'Bart' },
                { name: 'Lisa' },
                { name: 'Maggie' },
                { name: 'Homer' },
                { name: 'Marge' } ];

              console.log('return',formatting(data));