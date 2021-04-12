// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.list = new ListNode();
    this.first = this.list;
    this.list.next = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.list.value = element;
    this.list.next = new ListNode();
    this.list = this.list.next;
    this.length += 1;
  }

  dequeue() {
    const result = this.first.value;
    this.first = this.first.next;
    return result;
  }
}

module.exports = Queue;
