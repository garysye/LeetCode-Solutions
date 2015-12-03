// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    var sumHash = {};

    var calculateNextNum = function (num) {
      // calculate sum of squares of digits
      var digits = [];
      var digit, sum;
      while ( num !== 0 ) {
        digit = num % 10;
        digits.push(digit);
        num = (num - digit) / 10;
      }
      sum = digits.reduce(function (acc, val) {
        return acc + Math.pow(val, 2);
      }, 0);

      // if sum is equal to 1, return true
      if( sum === 1) {
        return true;
      }

      // else if sum is in hash table return false
      if( sumHash[sum] ) {
        return false;
      }
      
      // if neither, then store sum in hash table and repeat
      sumHash[sum] = true;
      return calculateNextNum(sum);
    }

    return calculateNextNum(n);
};
