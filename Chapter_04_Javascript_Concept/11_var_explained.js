var a = 10; // Global Scope

//var is function scoped

function printHello() {
    console.log("hellow world");
    var a = 20; // Local Scope
    console.log(a);

    if (true) {
        var a = 30; // Still in the same function scope
        console.log(a);
    }
}


printHello();
var a = 50;

// var == trump, flipper,dual faced, no trust worthy