let str1 = readline();
let str2 = readline();
let str_1=str1.toLowerCase();
let str_2=str2.toLowerCase();
if (str_1 === str_2) {
  print("0");
} else if (str_1 > str_2) {
  print("1");
}
else{
    print("-1");
}