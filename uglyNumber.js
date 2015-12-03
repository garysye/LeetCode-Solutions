/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if( num === 0 || num === 1) {
        return !!num;
    }
    var divideBy = function (x, factor) {
        while( x === Math.floor(x) ) {
            x /= factor;
        }
        return x * factor;
    };
    if( divideBy(divideBy(divideBy(num, 2), 3), 5) === 1 ) {
        return true;
    }
    return false;
 
};
