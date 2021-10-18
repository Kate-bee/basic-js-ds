const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (!this.value) {
      this.value = value;
      this.next = null;
    } else {
      let elem = this;
      while (elem.next) {
        elem = elem.next
      }
      elem.next = new ListNode(value);
    }
  }
  dequeue() {
    const el = this;
    const firstEl = el.value;
    this.value = el.next.value;
    this.next = el.next.next;
    return firstEl;
  }

}
