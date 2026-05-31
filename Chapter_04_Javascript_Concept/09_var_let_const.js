var v = 10;
let l = 30;
const c = 2.34;

var browser = "chrome";
var browser = "firfox"; //var can be redeclared and updated
browser = "edge"; //var can be updated

//Example of var
var testCases = ["login", "signup", "logout"];

for (var i = 0; i < testCases.length; i++) {
    console.log("running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i); //i is accessible outside the loop 
