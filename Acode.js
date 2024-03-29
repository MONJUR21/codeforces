"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

// thats all what you have to write to get input from stdin, using readLine.

// Main code runs in main();

function main() {
    let n=parseInt(readline());
    if(n%5==0){
      console.log(n/5);
    }
    else{
      console.log(parseInt((n/5)+1));
    }
}
