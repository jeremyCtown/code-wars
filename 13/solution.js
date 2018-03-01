'use strict';

function mutateMyStrings(stringOne, stringTwo){
  let answer = [];
  answer.push(stringOne);
  
  let string1 = stringOne.split('');
  let string2 = stringTwo.split('');
  let x;
  for (let i in string1) {
    if(string1[i] !== string2[i]) {
      string1[i] = string2[i];
      x = string1.join('');
      answer.push(x);
    }
  }
  return answer.join('\n') + '\n';
}