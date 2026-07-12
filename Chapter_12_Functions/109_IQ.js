// function logTest(name) {
//     console.log(`Running: ${name}`);
//     //no return statement
// }
// let result = logTest("Login");
// console.log(result); //undefined

//======================================================
// Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// let result = getStatus(200);
// let result1 = getStatus(400);
// let result2 = getStatus(500);
// console.log(result);
// console.log(result1);
// console.log(result2);

//======================================================
function logTest(name){
    console.log(`Running: ${name}`);
    //no return statement
}

let result = logTest("Login");
console.log(result); //undefined

//======================================================
greet("Alice");

function greet(name) {
    return `Hello, ${name}!`;

    // This code will never be reached this one is hosted after return statement
}
//======================================================
sayHi("Bob");
const sayHi = function (name) {
    return `Hi, ${name}!`;
    //reference error: Cannot access 'sayHi' before initialization
    // This code will never be reached this one is hosted after return statement
};



