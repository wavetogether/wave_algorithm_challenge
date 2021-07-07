/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    var charNumMapS = makeCharNumMap(s);
    var splitT = t.split('');
    var num = 0;
    
    for (var i = 0; i < splitT.length; i++) {
        var char = splitT[i];
        if (!charNumMapS[char]) {
            num += 1;
        } else {
            charNumMapS[char] -= 1;
        } 
    }
    return num;
};

var makeCharNumMap = function (str) {
    var split = str.split('');
    var mapObject = {};
    for (var i = 0; i < split.length; i++) {
        var char = split[i];
        if (mapObject[char] === undefined) {
            mapObject[char] = 1;
        } else {
            mapObject[char] += 1;
        }
    }
    return mapObject;
}
