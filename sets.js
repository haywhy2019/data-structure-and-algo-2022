class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return element in this.items;
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  // works as size just another method using loops
  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      // {2}
      if (this.items.hasOwnProperty(key)) {
        // {3}
        count++; // {4}
      }
      return count;
    }
  }

  values() {
    return Object.values(this.items);
  }
  //works dame as values just another method using loops
  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }
  union(otherSet) {
    console.log(otherSet, "otherset");
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }
  // same as union set but using loops
  unionLegacy(otherSet) {
    const unionSet = new Set();
    let values = this.values()
    for(let i =0; i < values.length; i ++){
        unionSet.add(values[i])
    }
    values = otherSet.value()
    for(let i =0; i < values.length; i ++){
        unionSet.add(values[i])
    }
    return unionSet
  }
  intersection(otherSet){
      const intersectionSet = new Set()
      const values = this.values()
      for(let i = 0; i < values.length; i ++){
          if(otherSet.has(values[i])){
             intersectionSet.add(values[i])
          }
      }
      return intersectionSet
  }
}

const set = new Set();

set.add(1);
set.add(2);

console.log(set.values(), "values");
console.log(set.has(1), "has");
console.log(set.has(2), "has2");
console.log(set.size(), "sixe");
// set.delete(1)
console.log(set.values(), "values");

//test union of set
const newSet = new Set();
newSet.add(20);
newSet.add(30);
newSet.add(50);
console.log(set.union(newSet), "union");

//test intersection
const setA = new Set();
   setA.add(1);
   setA.add(2);
   setA.add(3);
   const setB = new Set();
   setB.add(2);
   setB.add(3);
   setB.add(4);
   const intersectionAB = setA.intersection(setB);
   console.log(intersectionAB.values());
