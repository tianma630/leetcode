/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let ml, cml, l1n = l1, l2n = l2, extra = 0;
    while (l1n && l2n) {
        const sum = l1n.val + l2n.val + extra;
        const tmp = new ListNode(sum % 10);
        extra = parseInt(sum / 10);

        if (ml) {
            cml.next = tmp;
        } else {
            ml = tmp;
        }
        cml = tmp;
        l1n = l1n.next;
        l2n = l2n.next;
    }

    while (l1n) {
        const sum = l1n.val + extra;
        const tmp = new ListNode(sum % 10);
        extra = parseInt(sum / 10);

        if (ml) {
            cml.next = tmp;
        } else {
            ml = tmp;
        }
        cml = tmp;
        l1n = l1n.next;
    }

    while (l2n) {
        const sum = l2n.val + extra;
        const tmp = new ListNode(sum % 10);
        extra = parseInt(sum / 10);

        if (ml) {
            cml.next = tmp;
        } else {
            ml = tmp;
        }
        cml = tmp;
        l2n = l2n.next;
    }

    if (extra === 1) {
        ml.next = new ListNode(extra);
    }

    return ml;
};

let l1 = new ListNode(1);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(8);
// l1.next.next.next = new ListNode(2);

let l2 = new ListNode(9);
l2.next = new ListNode(9);
// l2.next.next = new ListNode(4);

const ret = addTwoNumbers(l1, l2);

const arr = [];

let n = ret;
while(n) {
    arr.push(n.val);
    n = n.next;
}

console.log(arr.join('->'))