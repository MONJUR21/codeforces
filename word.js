"use strict";
let s=readline();
let count=0;
let count1=0;
for(let i=0;i<s.length;i++){
  if(s[i]===s[i].toUpperCase()){
    count++;
  }
  else{
    count1++;
  }
}
if(count<=count1){
  print(s.toLowerCase());
}
else{
  print(s.toUpperCase());
}
