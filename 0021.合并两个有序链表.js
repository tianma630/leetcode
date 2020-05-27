/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 归并排序中的逻辑
var mergeTwoLists = function(l1, l2) {
    let ml;
    let nml;
    let n1 = l1;
    let n2 = l2; 
    while (n1 && n2) {
        let tmp;
        if (n1.val < n2.val) {
            tmp = new ListNode(n1.val);
            n1 = n1.next;
        } else {
            tmp = new ListNode(n2.val);
            n2 = n2.next;
        }
        if (!ml) {
            ml = tmp;
        } else {
            nml.next = tmp;
        }
        nml = tmp;
    }

    while (n1) {
        let tmp = new ListNode(n1.val); 
        n1 = n1.next;
        if (!ml) {
            ml = tmp;
        } else {
            nml.next = tmp;
        }
        nml = tmp;
    }

    while (n2) {
        nml = new ListNode(n2.val); 
        n2 = n2.next;
        if (!ml) {
            ml = tmp;
        } else {
            nml.next = tmp;
        }
        nml = tmp;
    }

    return ml;
};

let l1 = new ListNode(1);
l1.next = new ListNode(8);
l1.next.next = new ListNode(10);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let ml = mergeTwoLists(l1, l2);

const arr = [];

let n = ml;
while(n) {
    arr.push(n.val);
    n = n.next;
}

console.log(arr.join('->'))

