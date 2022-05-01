class List {
  constructor(
    clear,
    find,
    toString,
    insert,
    front,
    end,
    prev,
    next,
    length,
    currPos,
    moveTo,
    getElement,
    contains
  ) {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
  }
  append(element) {
    this.dataStore[this.listSize++] = element;
   return this.dataStore
  }

  find(element){
    for (let i = 0; i < this.dataStore.length; i ++){
      if(element == this.dataStore[i]){
        return i
      }
    
    }
    return -1
  }


remove(element) {
  foundAt = find(element)
  if(foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
  
  }
}
  //////////
}

var link = new List()

console.log(link.append(10), "link")


// Write a function that inserts an element into a list only if the element to be inserted
// is larger than any of the elements currently in the list. Larger can mean either greater
// than when working with numeric values, or further down in the alphabet, when
// working with textual values.

function insertIfGreaterThan(list, element) {
  for (let i = 0; i < list.length; i++) {
    if (element > list[i]) {
      list[list.length] = element;
    }
    return list;
  }
}

// console.log(insertIfGreaterThan([2,4,5],11))
// console.log(insertIfGreaterThan([2,4,5],1))
// console.log(insertIfGreaterThan([2,4,5],14))
// console.log(insertIfGreaterThan(['b', 'c','d'], 'z'))
// console.log(insertIfGreaterThan(['b', 'c','d'], 'A'))

// Write a function that inserts an element into a list only if the element to be inserted
// is smaller than any of the elements currently in the list.

function insertIfSmallerThan(list, element) {
  for (let i = 0; i < list.length; i++) {
    if (element < list[i]) {
      list[list.length] = element;
    } else {
      console.log("element is greater than all");
    }
    return list;
  }
}

// console.log(insertIfSmallerThan([2,4,6], 8))
// console.log(insertIfSmallerThan([2,4,6], 1))

// Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.person = { name, gender };
  }
}

const person1 = new Person("segun", "male");
const person2 = new Person("seun", "male");
const person3 = new Person("sgun", "male");
const person4 = new Person("sola", "female");

const personList = [
  person1.person,
  person2.person,
  person3.person,
  person4.person,
];

console.log(personList, "person");
function displayPerson(list, gender) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    console.log(list[i], "gender");
    if (list[i].gender == gender) {
      arr.push(list[i]);
    }
  }
  return arr;
}
// console.log(displayPerson(personList, "female"));
// console.log(displayPerson(personList, "male"));
