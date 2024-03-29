"use strict";
let n=parseInt(readline());
for(let i=0; i<n; i++){
    let str=readline();
    if(str.length > 10){
        print(`${str[0]}${str.length-2}${str[str.length-1]}`);
    }
    else{
        print(`${str}`);
    }
}