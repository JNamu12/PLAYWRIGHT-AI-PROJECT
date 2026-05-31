let x = "global";

if (true) {
    //TDZ for block-scoped "x" starts here
    // console.log(x); // ReferenceError (Not "global"!)
    let x = "block"; //TDZ ends
    console.log(x); // "block"

}

console.log(x);

