'use strict';
let inputLine = readline();
let inputs = inputLine.split(" ");

let a = parseInt(inputs[0]);
let b = parseInt(inputs[1]);
let c = 0;
while (a <= b) {
  a *= 3;
  b *= 2;
  c=c+1;
}
print(c);
