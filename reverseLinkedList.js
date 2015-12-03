/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var node = null;
    var oldNode = null;
    // Iterate through linked list
    while( head !== null ) {
        // Save previous node
        oldNode = node;
        // Create new node and set node.next to previous node
        node = new ListNode(head.val);
        node.next = oldNode;
        // Continue iteration
        head = head.next;
    }
    // Return reversed linked list
    return node;
};
