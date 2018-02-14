'use strict';

function fixTheMeerkat(arr) {
  let newArray = [];
  for (let i in arr) {
    newArray.unshift(arr[i]);
    if (newArray.length === 3) {
     break;
    }
   }
   return newArray;
 }