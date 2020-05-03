"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = getMessage;
exports.Stack = Stack;

// Imagine you're in charge one of the service of a big micro service architecture
// system which is currently running out of memory by the cost of thousend of operations
// performed by the system and the high increase in the number of users that are using it
// As the current service that you're in charge 😉 hasn't optimazed it's code we would like
// you to see part of the code and determine some functions where the benchmark is highly
// increased. One of the function is the one in charge to take an array of strings and return
// this as a single message => function getMessage(list).
// The other one is a data structure created to insert data, get the last element inserted and
// remove the last element inserted => function Stack(element?).
// We would like to increase the performance of the code with a better algorithm and a better memory usage.
// Your task is to describe your thoughts and try to design a better implementation of the current code.

/**
 * This function return a string with all the elements
 * that doesn't start with 'a' or 'A' with a space " "
 *
 * @param {array} list
 * @returns {string}
 */
function getMessage(list) {
  let result = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].startsWith('a') || list[i].startsWith('A')) continue;
    result += list[i] + " ";
  }

  return result.trim();
}


/**
 * This function what it does is to create a "Stack" data structe
 * to insert eleemnt into a array and return the value of the last
 * element inserted performing a LI-FO (Last In - First Out)
 * 
 * @param {?any} element
 * @returns {object}
 */
function Stack(element) {
  this.list = element ? [element] : [];
  return {
    push: e => {
      this.list.push(e);
    },
    getLastElement: () => {
      if (this.list.length > 0) {
        return this.list[this.list.length - 1];
      }
    },
    removeLastElement: () => {
      return this.list.pop();
    }
  };
}
