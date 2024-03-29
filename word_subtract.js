"use strict";
let inputLine=readline();
let input=inputLine.split(" ");

let n=parseInt(input[0]);
let k=parseInt(input[1]);

for(let i=0;i<k;i++){
  if(n%10==0){
    n/=10;
  }
  else{
    n-=1;
  }
}
print(n);