'use strict';

const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzzer');

describe('FizzBuzz', function (){

  it('If multiple of 5 say buzz', function(){
    const normalCases = [
      {a: 5, expected: 'buzz'},
      { a: 10, expected: 'buzz'},
      { a: 20, expected: 'buzz'}
    ];

    normalCases.forEach(function(val) {
      const answer = fizzBuzz(val.a);
      expect(answer).to.equal(val.expected);
    });
  });

  it('If multiple of 3 say fizz', function() {
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 6, expected: 'fizz'},
      {a: 9, expected: 'fizz'},
    ];

    normalCases.forEach(function(num) {
      const answer = fizzBuzz(num.a);
      expect(answer).to.equal(num.expected);
    });
  });

  it('If multiple of 15 say fizzbuzz', function() {
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 30, expected: 'fizz-buzz'},
      {a: 45, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(num) {
      const answer = fizzBuzz(num.a);
      expect(answer).to.equal(num.expected);
    });
  });

  it('If not a multiple of 15, 5, or 3, return number', function () {
    const normalCases = [
      { a: 1},
      { a: 4},
      { a: 7}
    ];

    normalCases.forEach(function (num) {
      const answer = fizzBuzz(num.a);
      expect(answer).to.equal(num.a);
    });
  });
  it('If not a number return error', function () {
    const edgeCases = [
      { a: 'werf' },
      { a: true },
      { a: null }
    ];
    
    edgeCases.forEach(function (num) {
      expect(function () {
        fizzBuzz(num);
      }).to.throw(Error);
    });
  });

});