"use strict";
let n=parseInt(readline());
let inputLine=readline();
let input=inputLine.split(" ");
let count=0;
for(let i=0;i<n;i++){
    if(input[i]==1){
        count++;
        break;
    }
}
if(count==0){
    print("EASY");
}
else{
    print("HARD");
}