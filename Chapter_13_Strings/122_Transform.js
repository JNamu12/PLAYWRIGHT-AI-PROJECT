let str = " Hello World! ";
console.log(str.toUpperCase()); // " HELLO WORLD! "
console.log(str.toLowerCase()); // " hello world! "
console.log(str.trim()); // "Hello World!"  
console.log(str.trim().toUpperCase()); // "HELLO WORLD!"

str.trimStart();
str.trimEnd();

let msg = " Test: Fail. Retry: Fail. ";
console.log(msg.replace("Fail", "Pass")); // " Test: Pass. Retry: Fail. "
console.log(msg.replaceAll("Fail", "Pass"));
console.log(msg.replaceAll(/Fail/g, "Pass")); // " Test: Pass. Retry: Pass. "

// Concatenation
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

let r = "pass,fail,skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);
