// //linear O(n)
// function url(input) {
//   if(input.length === 0) {
//     return '';
//   }
//   if(input[0] === ' ') {
//     return '%20' + url(input.slice(1));
//   } 
//   return input[0] + url(input.slice(1));
// }

// console.log(url('www.thinkful.com /tauh ida parv een'));

// // function filtering(input, newArray = []) {
// //   // let newArray = [];
// //   if(input.length === 0) {
// //     return;
// //   }
// //   if(input[0] < 5) {
// //     return filtering(input.slice(1));
// //   }
// //   if(input[0] >= 5 ) {
// //     return input[0];
// //   }
// //   newArray = [...newArray, filtering(input.slice(1))];
// // }

// // console.log(filtering([1, 2, 3, 4, 5, 6, 7]));

// function maxSum(input) {
//   let currentTotal = 0;
//   let maxTotal = 0;
//   for(let i = 0; i < input.length; i++) {
//     let restTotal = input.slice(i+1).reduce((a, b) => a + b, 0);
//     currentTotal = currentTotal + input[i];
//     if((currentTotal > currentTotal + restTotal || (i === (input.length-1) && maxTotal === 0)) && currentTotal > maxTotal) {
//       maxTotal = currentTotal;
//     }
//   }
//   return maxTotal;
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1]));


// function mergeArrays(inputOne, inputTwo) {
//   let newArray = [...inputOne, ...inputTwo];
//   newArray.sort((a, b) => a - b);
//   return newArray;
// }

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// function removeCharacters(input, restricted) {
//   let deleted = restricted.split('');
//   if(input.length === 0) {
//     return '';
//   }
//   if(deleted.includes(input[0])) {
//     return '' + removeCharacters(input.slice(1), restricted);
//   }
//   else return input[0] + removeCharacters(input.slice(1), restricted);
// }

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// function products(input) {
//   let sums = [];
//   for(let i = 0; i < input.length; i++) {
//     let total = 1;
//     for(let j = 0; j < input.length; j++) {
//       if(j !== i) {
//         total = input[j] * total;
//       }
//     }
//     sums[i] = total;
//   }
//   return sums;
// }

// console.log(products([1, 3, 9, 4]));


// function twodArray(input) {
//   let newArrayOne = input;
//   for(let i = 0; i < input.length; i++) {
//     for(let j = 0; j < input[i].length; j++) {
//       if(input[i][j] === 0) {
//         for(let k = 0; k < input[i].length; k++) {
//           newArrayOne[k][j] = 0;
//         }
//       }
//     }
//   }
//   let newArrayTwo = input;
//   for(let i = 0; i < input.length; i++) {
//     for(let j = 0; j < input[i].length; j++) {
//       if(input[i][j] === 0) {
//         for(let k = 0; k < input[i].length; k++) {
//           newArrayTwo[i][k] = 0;
//         }
//       }
//     }
//   }
//   let comboArray = input;

//   for(let i = 0; i < input.length; i++) {
//     for(let j = 0; j < input[i].length; j++) {
//       if(newArrayOne[i][j] === 1 && newArrayTwo[i][j] === 1) {
//         comboArray[i][j] = 1;
//       } else {
//         comboArray[i][j] = 0;
//       }
//     }
//   }
//   console.log(newArrayOne);
//   console.log(newArrayTwo);
//   return comboArray;
// }

// console.log(twodArray([[1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]]));

function twodArray(arr, newArray = [], x=0, y=0) {
  if(newArray.length === 0) {
    console.log('setting new array');
    newArray = [...arr];
  }
  console.log('original');
  console.log(arr);
  console.log('new');
  console.log(newArray);

  if(y >= arr.length) {
    twodArray(arr, newArray, x+1, 0);
  }
  if(x >= arr.length) {
    console.log(newArray);
    return newArray;
  }
  console.log(arr[x][y]);
  if(arr[x][y] === 0) {
    for(let i = 0; i < arr.length; i++) {
      newArray[x][i] = 0;
      // for(let j = 0; j < arr.length; j++) {
      //   newArray[j][y] = 0;
      // }
    }
    twodArray(arr, newArray, x+1, 0);
  }
  if(arr[x][y] === 1) {
    twodArray(arr, newArray, x, y+1);
  }
}

console.log(twodArray([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));

// function stringRotation(input, check, postfix='') {
//   if(input + postfix === check) {
//     console.log(true);
//     return true;
//   }
//   if(!input[0]) {
//     console.log(false);
//     return false;
//   }
//   postfix = postfix + input[0];
//   stringRotation(input.slice(1), check, postfix);
// }

// console.log(stringRotation('amazon', 'azonma'));
// console.log(stringRotation('amazon', 'azonam'));