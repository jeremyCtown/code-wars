'use strict';

function capitalize(s){
  let showIndex = [];
  let stringA = s.toLowerCase().split('');
  for (let i = 0; i < stringA.length; i += 2) {
      stringA[i]= stringA[i].toUpperCase();
  }
  showIndex[0]= stringA.join('');
  
  let stringB = s.toLowerCase().split('');
  for (let i = 1; i < stringB.length; i += 2) {
    stringB[i] = stringB[i].toUpperCase();
    }
  showIndex[1]= stringB.join('');
  
  return showIndex;
};