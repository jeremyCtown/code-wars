'use strict';

function cubeOdd(arr) {
  let newArray = arr.filter(x => typeof x === 'number');
  console.log (newArray);
  
  if (newArray.length === arr.length && arr.length >= 0) {
    let sumOfOdds = arr.map(x => x * x * x).filter(x => x % 2 !== 0).reduce((a,c) => a + c);
    return sumOfOdds;
  } else {
    return undefined;
  }
}