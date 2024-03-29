"use strict";
let t = parseInt(readline());
for (let i = 0; i < t; i++) {
  let inputLine = readline();
  let input = inputLine.split(" ");
  let a = parseInt(input[0]);
  let b = parseInt(input[1]);
  let c = parseInt(input[2]);
  if(a<b && b<c){
    print("STAIR")
  }
  else if(a<b && b>c){
    print("PEAK");
  }
  else{
    print("NONE");
  }
}
