"use strict";

let inputLine = readline();
let input = inputLine.split(" ");

let M=parseInt(input[0]);
let N=parseInt(input[1]);

let result=Math.floor((M*N)/2);

print(result);
