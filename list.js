class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
  }
  append(element) {
    this.dataStore[this.listSize++] = element;
    return this.dataStore;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (element == this.dataStore[i]) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    var foundAt = find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }

  insertIndex(element, position) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (position == i) {
        this.dataStore.splice(i + 1, 0, element);
        ++this.listSize;
        return true;
      }
    }
    return false;
  }

  insertAfter(element, number) {
    let after = find(number);
    if (after > -1) {
      this.dataStore.splice(after + 1, 0, element);
      ++this.listSize;
    }
    return false;
  }
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
    return this.dataStore;
  }
  contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (element == this.dataStore[i]) {
        return true;
      }
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  currPos() {
    return this.pos;
  }
  moveTo(position) {
    this.pos = position;
  }
  getElement() {
    return this.dataStore[this.pos];
  }
  //////////
}

var link = new List();
var names = new List();

console.log(link.append(10), "link");
console.log(link.append(13), "link");
console.log(link.remove(10), "removed");
console.log(link.dataStore, "store");
console.log(link.append(33), "link");
console.log(link.length(), "size");
console.log(link.toString(), "view store");
console.log(link.insertIndex(40, 1), "insert");
console.log(link.insertAfter(45, 33), "insert");
console.log(link.dataStore, "insert store");
// console.log(link.clear(), "clear");
console.log(link.contains(13), "contains");

names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement(), "front");
names.next();
console.log(names.getElement(), "next");
names.next();
console.log(names.getElement(), "next");

// for(names.front(); names.currPos() < names.length(); names.next()){
//   console.log(names.getElement(), "test")
// }

// exercises
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
