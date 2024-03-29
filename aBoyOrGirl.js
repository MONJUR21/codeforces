let str="oiaxdao";
let count=0;
let l=str.length;
for(let i=0; i<str.length; i++){
    for(let j=0; j<str.length; j++){
        if(str[i]===str[j]){
            count++;
        }
        else{
            count++;
        }
        l--;
    }
}
if(count%2==0){
    console.log("CHAT WITH HER!");
}
else{
    console.log("IGNORE HIM!");
}
