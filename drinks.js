"use strict";
let n=parseInt(readline());

let inputLine=readline();
let input=inputLine.split(" ");
let p=[];
let v=0;
for(let i=0; i< n; i++){
    p[i]=parseInt(input[i]);
    v=v+p[i];
}
print((v/n).toFixed(12));