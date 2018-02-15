'use strict';

function insertDash(num) { 
    var numArr = num.toString().split('');
    var numString = [];
    for (var i = 0; i < numArr.length; i++){
        numString.push(numArr[i]);
        if (numArr[i]%2 != 0){
            if (i+1 < numArr.length && numArr[i+1]%2 != 0) {
                numString.push("-")
            }
        }
    }  
  return numString.join("");
}
