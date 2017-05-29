function sayHello() {
  ly(1,3);
  return "Hello, world!";
}

function ly(num1, num2) {
  if (num1 % 2 == 1) {
    return num1 + num2;
  } else {
    return num1 * num2;
  }
}