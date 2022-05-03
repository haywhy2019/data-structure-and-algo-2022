class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }
  pop() {
    return this.dataStore[--this.top];
  }
  peek() {
    return this.dataStore[this.top - 1];
  }
  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }
}

let stack = new Stack();

stack.push(10);
stack.push(7);
stack.push(3);
console.log(stack.top, stack.dataStore, stack.pop());

// palindromes
function isPalindrome(element) {
  let palinStack = new Stack();
  for (let i = 0; i < element.length; i++) {
    palinStack.push(element[i]);
  }

  console.log(palinStack.dataStore, "stack");
  var rword = "";
  while (palinStack.length() > 0) {
    rword += palinStack.pop();
  }
  if (element == rword) {
    return true;
  } else {
    return false;
  }
}

var word = "hello";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
word = "racecar";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

function recussive(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + recussive(n - 1);
  }
}

console.log(recussive(10), "rucuss");

// Excercise

// 1. A stack can be used to ensure that an arithmetic expression has balanced parentheses.
// Write a function that takes an arithmetic expression as an argument and
// returns the postion in the expression where a parenthesis is missing. An example
// of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
// * .24.

let stack2 = new Stack();

function arithExpression(element) {
  let string = element
  console.log(string, "string")
  for(let i = 0; i < string.length; i ++){
      if(string[i] == "(" || string[i] == ")")
      stack2.push(string[i])
  }
  if(stack2.length()  % 2 == 0){
      console.log("no open parentesis",stack2.length()  % 2 )
  }else{
      console.log("there is an opne parentesis",stack2.length()  % 2)
  }
 return stack2.dataStore
}

console.log(arithExpression("2.3 + 23 / 12 + (3.14159* .24)"))