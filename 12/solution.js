'use strict';

function high(x){
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let scores = [];
  let highScore = 0;
  let winner = '';
  let newArray = x.split(' ');
  
  for(let i in newArray) {
    scores[i] = 0;
    for (let j in newArray[i]) {
        scores[i] += letters.indexOf(newArray[i][j]) + 1;
    }
    if(scores[i] > highScore) {
      highScore = scores[i];
      winner = newArray[i];
      }  
    }
  return winner;
}