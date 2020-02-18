//Runtime: 56 ms, faster than 71.11% of JavaScript online submissions for Valid Parentheses.
//Memory Usage: 36 MB, less than 8.33% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s == "") return true;
    if (s.length % 2 === 1) return false;
    if (!isHead(s.charAt(0))) return false;
    var str = '';
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (isHead(c)) {
            str = str.slice(0, i) + c + matchingTail(c) + str.slice(i);
        }
    }
    return str === s;
};

var isHead = (c) => c === "(" || c === "[" || c === "{";
    
var matchingTail = function(head) {
    switch(head) {
        case "(": return ")";
        case "[": return "]";
        case "{": return "}";
        default : return "";
    }
}
