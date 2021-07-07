/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
  if (S.includes('@')) {
    // 이메일인 경우
    const [emailId, rest] = S.toLowerCase().split('@');
    return `${emailId[0]}*****${emailId[emailId.length-1]}@${rest}`;
  } else {
    // 전화번호인 경우
    const numbers = S.replace(/[^\d]/g, '');
    const numbersLength = numbers.length;
    if (numbersLength === 10) {
      return '***-***-' + numbers.substr(numbersLength-4);
    } else { // if (numbersLength > 10)
      return '+' + '*'.repeat(numbersLength-10) + '-***-***-' + numbers.substr(numbersLength-4);
    }
  }
};