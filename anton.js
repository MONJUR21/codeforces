"use strict";
let n=parseInt(readline());
let s=readline();
let ac=0;
let dc=0;
for(let i=0;i<s.length;i++){
    if(s[i]==="A"){
        ac++;
    }
    else{
        dc++;
    }
}
if(ac>dc){
    print("Anton");
}
else if(ac<dc){
    print("Danik");
}
else{
    print("Friendship");
}