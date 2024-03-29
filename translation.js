"use strict";
let s=readline();
let t=readline();

let arr=t.split("");
arr.reverse();

let newArr=arr.join("");
newArr.toString();

if(s===newArr){
    print("YES");
}
else{
    print("NO");
}
