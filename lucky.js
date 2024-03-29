"use strict";

let n=parseInt(readline());
let count=0;
print(n);
while(n>0){
    if(parseInt(n%10)==4 || parseInt(n%10)==7){
        parseInt(n/=10);
    }
    else{
        count++;
        break;
    }
}
if(count==0){
    print("YES");
}
else{
    print("NO");
}


