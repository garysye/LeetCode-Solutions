/**
 * @constructor
 */
var Queue = function() {
    this.entryStack = [];
    this.exitStack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.entryStack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if( this.empty() ) {
        return null;
    }
    this._checkExitStack();
    return this.exitStack.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if( this.empty() ) {
        return null;
    }
    this._checkExitStack();
    return this.exitStack[exitStack.length - 1];
};

Queue.prototype._checkExitStack = function() {
    if( this.exitStack.length === 0 ) {
        for( var i = 0, len = this.entryStack.length; i < len; i++ ) {
            this.exitStack.push(this.entryStack.pop());
        }
    }
}

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    if( this.entryStack.length + this.exitStack.length === 0 ) {
        return true;
    }
    return false;
};

var queue = new Queue();
queue.push(1);
console.log(queue.peek());
