"use strict";
let inputLine = readline();
let input = inputLine.split(" ");
let n = parseInt(input[0]);
let k = parseInt(input[1]);
let count = 0;
for (let i = 1; i <= n; i += 2) {
  count++;
  if (count == k) {
    console.log(i);
    break;
  }
}
for (let i = 2; i <= n; i += 2) {
  if (count == k) {
    break;
  } else {
    count++;
    if (count == k) {
      console.log(i);
      break;
    }
  }
}
