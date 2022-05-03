class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }

  empty() {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

const allDancers = [
  { sex: "F", name: " Allison McMillan" },
  { sex: "M", name: " Frank Opitz" },
  { sex: "M", name: " Mason McMillan" },
  { sex: "M", name: "Clayton Ruff" },
  { sex: "F", name: " Cheryl Ferenback" },
  { sex: "M", name: " Raymond Williams" },
  { sex: "F", name: "Jennifer Ingram" },
  { sex: "M", name: " Bryan Frazer" },
  { sex: "M", name: " David Durr" },
  { sex: "M", name: " Danny Martin" },
  { sex: "F", name: " Aurora Adney" },
];

let females = new Queue();
let males = new Queue();
function getDancers(dancers) {
  for (let i = 0; i < dancers.length; i++) {
    if (dancers[i].sex == "M") {
      males.enqueue(dancers[i]);
    } else {
      females.enqueue(dancers[i]);
    }
  }
  return [females.dataStore, males.dataStore];
}

console.log(getDancers(allDancers), "all dancers");

function pairDancers(males, females) {
  console.log("the dance partners are:");

  while (!females.empty() && !males.empty()) {}
}

// Excercise
// Modify the Queue class to create a Deque class. A deque is a queue-like structure
// that allows elements to be added and removed from both the front and the back of
// the list. Test your class in a program.

class Deque {
  constructor() {
    this.dataStore = [];
  }
  addBack(element) {
    this.dataStore[this.dataStore.length] = element;
    return this.dataStore;
  }
  addFront(element) {
    return this.dataStore.splice(0, 0, element);
  }

  removeBack() {
    // can be implemented with splice
    let arr = [];
    for (let i = 0; i < this.dataStore.length - 1; i++) {
      arr.push(this.dataStore[i]);
    }
    this.dataStore = arr;
    return this.dataStore;
  }

  removeFront() {
    // can be implemented with splice
    let arr = [];
    for (let i = this.dataStore.length - 1; i > 0; i--) {
      arr.push(this.dataStore[i]);
    }
    this.dataStore = arr;
    return this.dataStore;
  }
}

let dequeTest = new Deque();

dequeTest.addBack("first");
dequeTest.addBack("second");
dequeTest.addFront("third");
console.log(dequeTest.removeBack());
console.log(dequeTest.removeBack());
dequeTest.addFront("forth");
dequeTest.addFront("fifth");
dequeTest.addBack("sixth");
console.log(dequeTest.removeFront(), "remove");

console.log(dequeTest.dataStore, "deque arrr");

// 1) Use the Deque class you created in Example 5-1 to determine if a given word is a
// palindrome.
let dequeTest2 = new Deque();
function checkPalindrone(element) {
  for (let i = element.length; i > 0; i--) {
    dequeTest2.addBack(element[i - 1]);
  }
  console.log(dequeTest2.dataStore, "store", dequeTest2.dataStore.length);
  let rword = "";
  while (dequeTest2.dataStore.length > 0) {
    rword += dequeTest2.dataStore.shift();
  }
  if (rword == element) {
    return `${rword} is a palindron of ${element}`;
  } else {
    return `${rword} is not a palindron of ${element}`;
  }
}

// Modify the priority queue example from Example 5-5 so that the higher-priority
// elements have higher numbers rather than lower numbers. Test your implementation
// with the example in the chapter.



console.log(checkPalindrone("word"));
console.log(checkPalindrone("racecar"));
