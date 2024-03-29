"use strict";
let n=parseInt(readline());
let s=readline();
let count=0;
for(let i=0;i<n;i++){
  if(s[i]===s[i+1]){
    count++;
  }
}
print(count);