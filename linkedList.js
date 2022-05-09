function defaultEquals(a,b){
  return a === b
}
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList{
  constructor(equalsFn = defaultEquals){
this.count = 0
this.head = undefined
this.equalsFn = equalsFn
  }
  push(element){
    const node = new Node(element)
    let current;
    if(this.head == null){
      console.log("1")
      this.head = node
    }else{
      current = this.head
      console.log("2", current.next)
      while(current.next !== null){
       current = current.next
      }
      current.next = node
    }
    this.count++
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);

console.log(list, "list")