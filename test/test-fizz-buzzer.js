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

});