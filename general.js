"use strict"

// General questions
// Resources:
// Career cup: https://www.careercup.com/page?pid=front-end-software-engineer-interview-questions
// JS dude: http://thatjsdude.com/interview/js1.html#isPrime

// --- --- ---

// Deeply flatten an array - iterative and recursion
// Can you write a function that deeply flattens an array?
// Resources:
// Queston: https://www.glassdoor.com/Interview/Can-you-write-a-function-that-deeply-flattens-an-array-QTN_1787940.htm
// Solution: http://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript

// Resource: http://amanvirk.me/flatten-an-array-without-recursion/
function deeplyFlattenIterative(arr) {
  let clonedArr = arr.slice(0);
  let flatArr = [];
  // traverse through nested arrays
  while (clonedArr.length) {
    // item is the first item in cloned array
    // clonedArr is mutated - becomes an array without the first item
    let item = clonedArr.shift();
    if (Array.isArray(item)) {
      clonedArr = item.concat(clonedArr);
    } else {
      flatArr.push(item)
    }
  }
  return flatArr;
}

// Resource: http://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript
function deeplyFlattenRecursion(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(deeplyFlattenRecursion(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

const simpleArr = [1,2,3,4,5];
const nestedArr = [1,2, [3,4,5, [6,7,8, [9,10,11]]]];
const nestedArr2 = [1, 2, [3, 4], 5, 6];
/*
console.log("flatten array using recursion");
console.log("simple array is: ", simpleArr);
console.log("flattened simple array is: ", deeplyFlattenRecursion(simpleArr));
console.log("nested array is: ", nestedArr);
console.log("flattened nested array is:  ", deeplyFlattenRecursion(nestedArr));
console.log("--- ---  --- --- ---");
console.log("flatten array iteratively");
console.log("simple array is: ", simpleArr);
console.log("flattened simple array is: ", deeplyFlattenIterative(simpleArr));
console.log("nested array is: ", nestedArr);
console.log("flattened nested array is:  ", deeplyFlattenIterative(nestedArr));
*/

// --- --- ---

// Strings/Arrays

// Reverse Words in a String
// http://www.programcreek.com/2014/05/leetcode-reverse-words-in-a-string-ii-java/

const reverseWords = (input) => {
  let arr = input.split(" ");
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join(" ");
};

let testInput = "the sky is blue";
/*
console.log("Test input is: ", testInput);
console.log("Reversed String is: ", reverseWords(testInput));
*/

// Linked Lists
// Low-level data structure
// Stores ordered list of items in node objects with pointers to other nodes
// Resource: https://www.interviewcake.com/concept/javascript/linked-list

// Singly linked list
// Nodes have pointers to the next node

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

// Build a singly linked list
let a = new LinkedListNode(1);
let b = new LinkedListNode(2);
let c = new LinkedListNode(3);
/*
console.log("new node a is ", a);
console.log("new node b is ", b);
console.log("new node c is ", c);
*/
a.next = b;
b.next = c;
/*
console.log("new node a, linked to b is ", a);
console.log("new node b, linked to c is ", b);
console.log("new node c is ", c);

// Side Note: For strict mode, need to pass in this to function call. Otherwise this in function is undefined
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
LinkedListNode.call(this, "hello world");
*/

// --- --- ---

// Verify a prime number

function verifyPrime(number) {
  let divisor = number - 1;
  while (divisor) {
    if (divisor !== 1) {
      if (number % divisor) {
        return false;
      }
    }
    divisor--;
  }
  return true;
}

const testNum1 = 2;
const testNum2 = 6;
const testNum3 = 111;
const testNum4 = 163;
const testNum5 = 199

/*
console.log("test number 1 is ", testNum1);
console.log("is prime number? ", verifyPrime(testNum1));
console.log("test number 2 is ", testNum2);
console.log("is prime number? ", verifyPrime(testNum2));
console.log("test number 3 is ", testNum3);
console.log("is prime number? ", verifyPrime(testNum3));
console.log("test number 4 is ", testNum4);
console.log("is prime number? ", verifyPrime(testNum4));
console.log("test number 5 is ", testNum5);
console.log("is prime number? ", verifyPrime(testNum5));
*/

// --- --- ---

// Reverse a String with - multiple methods
// Source: http://thatjsdude.com/interview/js1.html#isPrime

// Question: How would you reverse a String in JavaScript?
// (1) Loop through string and concatentate characters to create a new string
// Disadvantages: Concatenation performs poorly in older browsers like IE8

function reverseStringLoop(inputStr) {
  let reversedStr = "";
  for (let i = inputStr.length - 1; i >=0; i--) {
    reversedStr += inputStr[i];
  }
  return reversedStr;
}

function reverseStringLoopArr(inputStr) {
  let reversedStrArr = [];
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStrArr.push(inputStr[i]);
  }
  return reversedStrArr.join("");
}

function reverseStringRecursion(inputStr) {
  if (inputStr === "") {
    return "";
  }
  return reverseStringRecursion(inputStr.substr(1)) + inputStr.charAt(0);
}

// At the base case, will return: ""
// At case before, will return: "" + e
// e + d = ed
// ed + c = edc
// edc + b = edcb
// edcb + a = edcba

function reverseStringBuiltIn(inputStr) {
  const reversedStr = inputStr.split("").reverse().join("");
  return reversedStr;
}

String.prototype.customReverseString = function (inputStr) {
  const reversedStr = this.split("").reverse().join("");
  return reversedStr;
}

const str1 = "abcde";
const str2 = "abc def ghi";

/*
console.log("(1) Loop through string and concatentate characters to create a new string");
console.log("str1 is: ", str1);
console.log("reversed: ", reverseStringLoop(str1));
console.log("str2 is: ", str2);
console.log("reversed: ", reverseStringLoop(str2));

console.log("--- --- ---");

console.log("(2) Loop through a string and save in array");
console.log("str2 is: ", str2);
console.log("reversed: ", reverseStringLoopArr(str2));
console.log("run-time complexity is O(n) time/space");

console.log("--- --- ---");

console.log("(3) Recursively");
console.log("str1 is: ", str1);
console.log("reversed is: ", reverseStringRecursion(str1));
console.log("str2 is: ", str2);
console.log("reversed is: ", reverseStringRecursion(str2));

console.log("--- --- ---");

console.log("(4) Built in method - In Array");
console.log("str1 is: ", str1);
console.log("reversed is: ", reverseStringBuiltIn(str1));
console.log("str2 is: ", str2);
console.log("reversed is: ", reverseStringBuiltIn(str2));

console.log("--- --- ---");

console.log("(5) Create a String extension that will reverse a string that you can use on a string");
console.log("str1 is: ", str1);
console.log("reversed is: ", str1.customReverseString());
console.log("str2 is: ", str2);
console.log("Reversed is: ", str2.customReverseString());
*/

// --- --- ---

// Check if a word is a Palindrome

function checkPalindrome(word) {
  const wordReversed = word.split("").reverse().join("");
  if (word === wordReversed) {
    return true;
  }
  return false;
}

const word1 = "bed";
const word2 = "dad";

/*
console.log("word 1 is ", word1);
console.log("Palindrome (same backwards and forwards)? ", checkPalindrome(word1));

console.log("word 2 is ", word2);
console.log("Palindrome (same backwards and forwards)? ", checkPalindrome(word2));
*/

// --- --- ---

// Count total number of 0's from 1 to n

function totalZeros(num) {
  let result = num;
  let counter = 0;

  while(result > 0) {
    counter += Math.floor(result/10);
    result = result/10;
  }
  return counter;
}

const num1 = 10;
const num2 = 101;
const num3 = 2014;
const num4 = 3424;

/*
console.log("num1: ", num1);
console.log("total num of zeroes is: ", totalZeros(num1));

console.log("num2: ", num2);
console.log("total num of zeroes is: ", totalZeros(num2));

console.log("num3: ", num3);
console.log("total num of zeroes is: ", totalZeros(num3));
*/

// --- --- ---

// Re-order 1 array of objects based on 1 array of indexes
// Resource: https://www.careercup.com/page?pid=front-end-software-engineer-interview-questions&sort=date

function reOrderReplace(objArr, indexArr) {
  let resultArr = [];
  for (let i = 0; i < objArr.length; i++) {
    resultArr.push("x");
  }
  for (let i = 0; i < objArr.length; i++) {
    const index = indexArr[i];
    const obj = objArr[i];
    resultArr.splice(index, 1, obj);
  }
  return resultArr;
}

const objArr = ["a", "b", "c", "d", "e"];
const indexArr = [3, 2, 0, 1, 4];

console.log("Re-order 1 array of objects based on 1 array of indexes");
console.log("--- --- ---");
console.log("Solution 1, iterative loop/splice");
console.log("arr1 of objects is ", objArr);
console.log("arr2 of indexes is ", indexArr);
console.log("reordered array is ", reOrderReplace(objArr, indexArr));
