'use strict';

function formatWords(words) {
  let newArray = [];
  for (let i in words) {
    if(words[i] !== '') {
      newArray.push(words[i]);
    }
  }
  if (newArray.length < 2) {
    return newArray.join();
  } else if (newArray.length === 2) {
    let lastItem = newArray.pop();
    return newArray.join() + ' and ' + lastItem;
  } else {
    let lastItem = newArray.pop();
    return newArray.join(', ') + ' and ' + lastItem;
  }