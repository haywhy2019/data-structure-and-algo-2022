function defaultEquals(a, b) {
  return a === b;
}
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index){
    if(index >= 0 && index < this.count){
      let current = this.head
      if(index == 0){
        this.head = current.next
      } else {
        let previous
        for(let i = 0; i < index; i++){
          previous = current
          current = current.next
          console.log(previous, current, "current")
        }
        previous.next = current.next
      }
      this.count --
      return current.element
    }
    return undefined;
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(2)

list.removeAt(1)

console.log(list, "list");
