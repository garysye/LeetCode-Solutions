/**
 * @param {number} n
 * @return {boolean}
 */
// Mathematical solution
// If there are 4 pieces left, you cannot win, so the same holds
// true for any multiple of 4 since your opponent can just match you
var canWinNim = function(n) {
    if( n % 4 === 0 ) {
        return false;
    }
    return true;
};

// Recursive solution
var canWinNim = function(n, me) {
    var iCanWin = false;
    // Base case
    if( n <= 3 ) {
        return true;
    }
    // Explores every potential move
    for( var i = 1; i <= 3; i++ ) {
        // If there is move where your opponent cannot win, then you win
        if( !canWinNim(n - i) ) {
            iCanWin = true;
            break;
        }
    }
    return iCanWin;
};
