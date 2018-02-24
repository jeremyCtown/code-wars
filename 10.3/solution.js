'use strict';

function find_average(array) {
  const reducer = (acc, cur) => acc + cur;
  return array.reduce(reducer)/array.length;
}