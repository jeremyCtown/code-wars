'use strict';

function abbrevName(name){
  const names = name.split(' ');
  let firstName = names[0].substring(0, 1).toUpperCase();
  let secondName = names[1].substring(0, 1).toUpperCase();
  return `${firstName}\.${secondName}`;
};