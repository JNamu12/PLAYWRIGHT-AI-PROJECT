if ("hello") console.log("String is truthy"); // "hello" = truthy
if (58) console.log("Number is truthy"); // 58 = truthy
if ({}) console.log("Empty object is truthy"); // {} = truthy
if ([]) console.log("Empty array is truthy"); // [] = truthy

if ("") console.log("won't print"); // "" = falsy
if (null) console.log("won't print"); // null = falsy
if (undefined) console.log("won't print"); // undefined 
if (NaN) console.log("won't print"); // NaN = falsy
if (0) console.log("won't print"); // 0 = falsy

//Any Number = 1,2,,3,34,35,64 = truthy
// 0 =False

let name = 0;
if (name) {
    console.log("hi");
} else {
    console.log("bye");
}