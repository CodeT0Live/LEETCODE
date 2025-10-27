class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList_itterative(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let current = head;
  let next = current.next;
  let prev = null;
  while (next !== null) {
    current.next = prev;
    prev = next;
    next = next ? next.next : null;
  }
  head = prev;
  return head;
}

function printList(head: ListNode | null) {
  if (head === null) {
    return;
  }
  const node = head;

  while (node !== null) {
    console.log(`${node.val}->`);
  }
}

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

reverseList_itterative(node1);
