describe('hello', function() {

  it('says hello luoying', function() {
    expect(sayHello()).toBe('Hello, world!');
  });

  it('输入两个数，第一个数字为奇数时，两个数字相加', function() {
    expect(ly(1, 3)).toBe(4);
  });

  it('输入两个数，第一个数字为偶数时，两个数字相乘', function() {
    expect(ly(2, 4)).toBe(8);
  });
});