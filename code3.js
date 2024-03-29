"use strict";
let result = 0;
let count = 0;
let n = parseInt(readline());
for (let i = 0; i < n; i++) {
  let inputLine = readline();
  let input = inputLine.split(" ");
  let friend1 = parseInt(input[0]);
  let friend2 = parseInt(input[1]);
  let friend3 = parseInt(input[2]);
  result += friend1 + friend2 + friend3;
  if (result >= 2) {
    count++;
    result = 0;
  } else {
    result = 0;
  }
}
print(count);
