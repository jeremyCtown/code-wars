'use strict';

function capitalize(s,arr){
  let newArray = s.split('');

  for (let i in arr) {
    if (newArray[arr[i]]) {
      newArray[arr[i]] = newArray[arr[i]].toUpperCase();
   }
  }
  return newArray.join('');
}