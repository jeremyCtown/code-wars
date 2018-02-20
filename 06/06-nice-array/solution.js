'use strict';

function isNice(arr){
  let counter = 0;
  for (let i in arr) {
    if(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
      counter ++;
    } else {
      return false;}
  }
  if(counter === arr.length && arr.length > 0) {
    return true;
  } else {
    return false;
  }
}