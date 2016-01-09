/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var otherIndex;
  for (var i = 0, len = numbers.length; i < len; i++) {
    otherIndex = binarySearch(numbers, target - numbers[i], i, 0, len - 1);
    if (otherIndex !== -1) {
      return [i + 1, otherIndex + 1];
    }
  }
};

var binarySearch = function(numbers, target, sourceInd, leftInd, rightInd) {
  var middle = Math.floor((leftInd + rightInd) / 2);
  if (leftInd > rightInd) {
    return -1;
  }
  if (numbers[middle] === target) {
    if (middle !== sourceInd) {
      return middle;
    } else if (numbers[middle - 1] === target) {
      return middle - 1;
    } else if (numbers[middle + 1] === target) {
      return middle + 1;
    } else {
      return -1;
    }
  }
  if (target < numbers[middle]) {
    return binarySearch(numbers, target, sourceInd, leftInd, middle - 1);
  }
  if (target > numbers[middle]) {
    return binarySearch(numbers, target, sourceInd, middle + 1, rightInd);
  }
};

var nums = [0, 0, 3, 4];
console.log(twoSum(nums, 6));
