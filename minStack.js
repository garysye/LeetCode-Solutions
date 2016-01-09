/**
 * @constructor
 */
var MinStack = function() {
    this.storage = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    var top = this.topNode();
    var min = top ? Math.min(top.min, x) : x;
    var node = new StackNode(x, min);
    this.storage.push(node);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    return this.storage.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.topNode().val;
};

MinStack.prototype.topNode = function() {
    return this.storage[this.storage.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.topNode().min;
};

var StackNode = function (val, min) {
    this.val = val;
    this.min = min;
};
