"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split(" ");
  main();
});
function readline() {
  return inputString[currentLine++];
}

function main() {
  let n=parseInt(readline());
if(n%5==0){
  print(n/5);
}
else{
  print(parseInt((n/5)+1));
}
}
