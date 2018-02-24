'use strict';

function filter_list(l) {
  let newArray = l.filter(x => typeof x === 'number');
  return newArray;
}