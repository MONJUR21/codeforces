"use strict";
let n=parseInt(readline());

let count =0;

for(let i=0; i<n; i++){
    let inputLine=readline();
    let input=inputLine.split(" ");
    let pi=parseInt(input[0]);
    let qi=parseInt(input[1]);
    if(pi<qi-1){
        count++;
    }
}
print(count);