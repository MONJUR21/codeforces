"use strict";
let t = parseInt(readline());
for (let i = 0; i < t; i++) {
  let s = readline();
  let hh = parseInt(s[0] + s[1]);
  if(hh==12){
    print(`${hh}:${s[3]}${s[4]} PM`);
  }
  else if(hh==0){
    print(`${hh+12}:${s[3]}${s[4]} AM`);
  }
  else if (hh > 12) {
    hh = hh - 12;
    if (hh < 10) {
      hh = "0" + hh;
    }
    print(`${hh}:${s[3]}${s[4]} PM`);
  } else {
    if (hh < 10) {
      hh = "0" + hh;
    }
    print(`${hh}:${s[3]}${s[4]} AM`);
  }
}
