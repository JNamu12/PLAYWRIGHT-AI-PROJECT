function outer() {
    let message = "hello";;
    console.log("Outer Called");
    function inner() {
        console.log(message);

    }
    return inner;
}

let fn_inner = outer();
fn_inner();

//inner function is returned from outer function and stored in fn_inner variable. When we call fn_inner(), it still has access to the message variable defined in the outer function's scope, demonstrating closure in JavaScript.