console.log(typeof ("200")); // string
let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13

//Access by index
console.log(str[0]); // "H"
console.log(str[7]);
console.log(str.at(-1)); // "!"
console.log(str.at(-7)); // "W"

//index =9, lenth =1
console.log(str.charAt(9)); // "r"
console.log(str.charAt(0)); // "H"
console.log(str.charCodeAt(0)); // 72 (ASCII value of "H")
console.log(str.charCodeAt(13)); // NaN (out of bounds)