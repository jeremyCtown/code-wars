'use strict';

function validatePIN (pin) {
  let pin4 = /^\d{4}$/;
  let pin6 = /^\d{6}$/;
  if(pin4.test(pin) || pin6.test(pin)) {
    return true;
  } else {
    return false;
  }
}
