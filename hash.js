function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString(); // {1}
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseLoseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseLoseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
}

const hash = new HashTable();
hash.put("segun", "segun@gmail.com");
hash.put("john", "john@gmail.com");
hash.put("biden", "biden@gmail.com");

console.log(hash.hashCode("segun"), " - segun");
console.log(hash.hashCode("john"), " - john");
console.log(hash.hashCode("biden"), " - biden");

console.log(hash.get("segun"));
console.log(hash.get("john"));
console.log(hash.get("biden"));
console.log(hash.get("tola"));

//es2015 map class

const map = new Map();
map.set("Gandalf", "gandalf@email.com");
map.set("John", "johnsnow@email.com");
map.set("Tyrion", "tyrion@email.com");
map.set("Gandalf", "gandalf@email.com");
console.log(map.has("Gandalf")); // true
map.set("Tyrion", "tyrion@email.com");
console.log(map.size); // 3
console.log(map.keys()); // MapIterator {"Gandalf", "John", "Tyrion"}
console.log(map.values()); // MapIterator {"gandalf@email.com", "johnsnow@email.com", "tyrion
console.log(map.get("Tyrion")); // tyrion@email.com
console.log(map.get("Gandalf"));
