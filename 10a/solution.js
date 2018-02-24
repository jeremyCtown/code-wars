'use strict';

function solution(str){
  let newArray = [];
  str.split();
  for (let i in str) {
      newArray.unshift(str[i]);
    }
  return newArray.join('');
}