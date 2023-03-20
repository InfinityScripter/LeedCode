//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// var addTwoNumbers = function(l1, l2) {
//     let carry = 0;
//     let sum = 0;
//     let head = new ListNode(0);
//     let current = head;
//     while (l1 || l2) {
//         sum = carry;
//         if (l1) {
//             sum += l1.val;
//             l1 = l1.next;
//         }
//         if (l2) {
//             sum += l2.val;
//             l2 = l2.next;
//         }
//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);
//         current = current.next;
//     }
//     if (carry > 0) {
//         current.next = new ListNode(carry);
//     }
//     return head.next;
// }

var addTwoNumbers = function(l1, l2) {
    // data we need to keep track of
    // array of sums
    // carry variable -> 9 + 1 = 10
    // we would have to carry the 1

    let carry = 0;
    let result = new ListNode(-1);
    let dummy = result;

    while(l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let nextDigit = (l1Val + l2Val + carry) % 10;
        result.next = new ListNode(nextDigit);
        result = result.next;

        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummy.next;
};
