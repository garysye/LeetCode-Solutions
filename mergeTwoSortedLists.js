//https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Store the start of the new list to return later
    var original, current, next, done;
    var done = false;
    if( !l2 || (l1 && l1.val <= l2.val) ) {
      original = l1;
      l1 = l1.next;
    } else {
      original = l2;
      l2 = l2.next;
    }
    current = original;

    // Go through each sorted list and if store the next smallest value as the tail
    while( !done ) {
      if( !l2 || (l1 && l1.val <= l2.val) ) {
        current.next = l1;
        current = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        current = l2;
        l2 = l2.next;
      }
      if( )
    }

    // Return the start of the new list
    return original;
};

