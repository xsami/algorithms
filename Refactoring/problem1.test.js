"use strict";

var _problem = require("./problem1");

describe('getMessage', () => {
  it('to be equal', () => {
    expect((0, _problem.getMessage)(["Hello", "my", "lovely", "angel"])).toEqual("Hello my lovely");
  });
});
describe('Stack', () => {
  it('last element inserted', () => {
    const myStack = new _problem.Stack(2);
    expect(myStack.getLastElement()).toEqual(2);
  });
});