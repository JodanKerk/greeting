var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

test('outputs Hello, name', () => {
  expect(greet("John")).toBe("Hello, John");
});

test('outputs Hello there!', () => {
    expect(greet()).toBe("Hello there!");
});

test('outputs Shouting', () => {
    expect(greet("JOHN")).toBe("HELLO JOHN!");
});

test('outputs multiple names', () => {
    expect(greet(["John", "Jane", "Mary"])).toBe("Hello,John,Jane,Mary");
});