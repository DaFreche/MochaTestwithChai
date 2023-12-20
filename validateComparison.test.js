// JavaScript Document



const assert = require('chai').assert;
const compareAndDisplayLarger = require('../app/TestMy'); // replace with the actual file path or function

describe('Compare and Display Larger Number', function () {

  it('should return the larger number when both values are numbers', function () {
    assert.strictEqual(compareAndDisplayLarger(5, 6), 6);
  });

  it('should return the larger number when both values are numbers', function () {
    assert.strictEqual(compareAndDisplayLarger(4, 3), 4);
  });

  it('should return "The amounts are equal" when both values are equal', function () {
    assert.strictEqual(compareAndDisplayLarger(3, 3), 'The amounts are equal');
  });

  it('should return "Please enter a number in Value 1" for non-numeric Value1', function () {
    assert.strictEqual(compareAndDisplayLarger('a', 5), 'Please enter a number in Value 1');
  });

  it('should return "Please enter a number in Value 2" for non-numeric Value2', function () {
    assert.strictEqual(compareAndDisplayLarger(5, 'a'), 'Please enter a number in Value 2');
  });

  it('should return "Please enter a number in Value 1" for empty Value1', function () {
    assert.strictEqual(compareAndDisplayLarger('', 5), 'Please enter a number in Value 1');
  });

  it('should return "Please enter a number in Value 2" for empty Value2', function () {
    assert.strictEqual(compareAndDisplayLarger(5, ''), 'Please enter a number in Value 2');
  });

  it('should return the larger number for negative Value1', function () {
    assert.strictEqual(compareAndDisplayLarger(-1, 5), 5);
  });

  it('should return the larger number for positive and negative values', function () {
    assert.strictEqual(compareAndDisplayLarger(+34, -30), 34);
  });

  it('should return the larger number for negative values', function () {
    assert.strictEqual(compareAndDisplayLarger(-5, -6), -5);
  });

  it('should return the larger number for positive and negative values', function () {
    assert.strictEqual(compareAndDisplayLarger(5, -1), 5);
  });

  it('should return the larger number for decimal values', function () {
    assert.strictEqual(compareAndDisplayLarger(1.5, 2), 2);
  });

  it('should return the larger number for decimal values', function () {
    assert.strictEqual(compareAndDisplayLarger(2, 1.5), 2);
  });

  it('should return "Please enter a number in Value 1" for fractional Value1', function () {
    assert.strictEqual(compareAndDisplayLarger('3/4', 1), 'Please enter a number in Value 1');
  });

  it('should return "Please enter a number in Value 1" for non-numeric Value1', function () {
    assert.strictEqual(compareAndDisplayLarger('5b', 3), 'Please enter a number in Value 1');
  });

  it('should return "Please enter a number in Value 2" for non-numeric Value2', function () {
    assert.strictEqual(compareAndDisplayLarger(3, '5b'), 'Please enter a number in Value 2');
  });

  it('should return "Please enter a number in Value 1" for empty Value1', function () {
    assert.strictEqual(compareAndDisplayLarger('', 5), 'Please enter a number in Value 1');
  });

  it('should return "Please enter a number in Value 2" for empty Value2', function () {
    assert.strictEqual(compareAndDisplayLarger(5, ''), 'Please enter a number in Value 2');
  });

});


