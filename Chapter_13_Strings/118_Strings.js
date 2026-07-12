//String quotes
let a = 'hello';

//double quotes
let b = "Hello";

//backticks
let c = `Hello`;

let name1 = "Alice";
let msg = 'Hello, ${name}! 2+2 = ${2+2}';// This will not work as expected because single quotes do not support template literals
console.log(msg);

//Multiline strings
let reports = `
 Test:Login
 Status:Pass
 Duration:320ms
 ds
 dsha
 dhhs
 hhh`;

let logstory = `
 I want to tell you a very long story 
where we had a lot of students, w
hich we basically have a lot of tests and blah
 blah blah blah blah blah. `;

console.log(String(200)); // "200"
//String(true); // "true"
//String(false); // "false"
//String(null); // "null"
String([1, 2, 3]); // "1,2,3"

// string - data type
// String -> interface( which will help you to create a new strings)