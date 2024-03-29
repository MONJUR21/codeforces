let t = parseInt(readline());

for (let i = 0; i < t; i++) {
  let n = parseInt(readline());
  let output = "";
  for (let j = 0; j < 2 * n; j++) {
    for (let k = 0; k < 2 * n; k++) {
      if(j==k){
        output += "#";
      }
      else{
        output += ".";
      }
    }
    if (j == 2 * n - 1) {
      continue;
    } else {
      output += "\n";
    }1
  }
  print(output);
}
