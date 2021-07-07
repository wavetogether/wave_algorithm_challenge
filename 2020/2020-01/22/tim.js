/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
  const alphabetRegex = /^[A-Za-z]+$/
  const isString = alphabetRegex.test(S[0]);
  let ret = '';
  
  if (isString) {
    ret = maskEmail(S);
  } else {
    ret = maskPhoneNumber(S)
  }
  
  return ret;
};


const maskPhoneNumber = (input) => {
  let ret = '';
  
  input = replaceAll(input, '(', '');
  input = replaceAll(input, ')', '');
  input = replaceAll(input, '-', '');
  input = replaceAll(input, '+', '');
  input = replaceAll(input, ' ', '');
  
  if (input.length > 10) {
    let rep = input.length-10;
    if (input.length - 10 > 3) rep = 3;
    ret += '+' + '*'.repeat(rep) + '-';
  }
  
  return ret + '***-***-' + input.slice(-4);
}

const maskEmail = (input) => {
  let inputSplit = input.split('@');
  let firstName = `${inputSplit[0][0]}*****${inputSplit[0][inputSplit[0].length-1]}`;
  return `${firstName.toLowerCase()}@${inputSplit[1].toLowerCase()}`;
}

const replaceAll = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
}
