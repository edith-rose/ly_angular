var sayHello = require('../src/hello');

describe('hello', function() {

  it('says hello luoying', function() {
    expect(sayHello('Jane')).toBe('Hello, Jane!');
  });
});