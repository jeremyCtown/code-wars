'use strict';

function insertDash(num){
  let numString = '';
  let numArr = num.toString().split('');
  for(let i in numArr){
      if(numArr[i] % 2 !== 0) {
         if(numArr[i+1]% 2 !== 0) {
          numString += (numArr[i] + '-'); 
          console.log(numArr[i] % 2);
          }
      } else {
          numString += numArr[i];
          console.log(numString);
      }
  }
  return numString;
}

//not currently working