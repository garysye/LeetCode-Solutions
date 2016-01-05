/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount, coinCounts) {
    // Uses a hash table to store previously calculated counts for dynamic programming
    coinCounts = coinCounts || {};
    // Base case: if amount is 0, then it's done
    if (amount === 0) {
        return 0;
    }
    // If amount is less than 0, this is not a valid solution
    if (amount < 0) {
        return -1;
    }
    // If this amount has not had a coin count calculated then, calculate it
    if (!coinCounts[amount]) {
        // Initiates the count as -1
        coinCounts[amount] = -1;
        // Iterates through each coin and recursively calls the function
        for (var i = 0; i < coins.length; i++) {
            coin = coins[i];
            var count = coinCounts[amount];
            var currentCount = coinChange(coins, amount - coin, coinCounts);
            // If the count returned is not -1 and is less than the stored count, then store it in the hash table
            if (currentCount !== -1 && (count === -1 || count > currentCount + 1)) {
                coinCounts[amount] = currentCount + 1;
            }
        }
    }
    return coinCounts[amount];
};
