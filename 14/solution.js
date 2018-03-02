'use strict';

function capitalize(s,arr){
let newArray = s.split('');

for (let i in newArray) {
  for (let j in arr) {
    if(i = arr[j]) {
      newArray[i].toUpperCase;
    }
  }
}
  return newArray.join('');
};