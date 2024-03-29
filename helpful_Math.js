"use strict";
let str = readline();
let array = str.split("");
array.sort();
for (let i = 0; i <array.length; i++) {
  if(array[0]==="+"){
    array.shift();
  }
}

for (let i = 1; i < array.length; i += 2) {
  array.splice(i, 0, "+");
}

let newArray = array.join("");
print(newArray);