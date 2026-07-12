// Scope in functions

let env = "statging";

function setupConfig() {
    let timeout = 1000;//local variable
    console.log(env); //✅ can access global
    console.group(timeout);//✅ can access local

}

setupConfig();
console.log(env); //statging
console.log(timeout); //ReferenceError: timeout is not defined