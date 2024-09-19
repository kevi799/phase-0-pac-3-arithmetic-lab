function add(a, b) {
  return a + b;
}
console.log(add());

function subtract(a, b) {
  return a - b;
}
console.log(subtract());

function multiply(a, b) {
  return a * b;
}

console.log(multiply());

function divide(a, b) {
  return a / b;
}

console.log(divide());

function increment(n) {
  return ++n;
}
console.log(increment());

function decrement(n) {
  return --n;
}
console.log(decrement());

function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt());

function  preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal());
