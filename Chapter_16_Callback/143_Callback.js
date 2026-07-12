function print() {
    console.log("Normal Function");
}

function placeOrder(ClipboardItem, callback) {
    console.log("Hi, You order is placed");
    callback();
}

// //First Way
// placeOrder("Pizza", function(){
//     console.log("Hi , How are you doing");
// }

//Second Way
placeOrder("Pizza", print); //this a annonymous function which is called as callback function. It is a function which is passed as an argument to another function and is executed after some operation is completed. In this case, the print function is passed as a callback to the placeOrder function, which will execute it after placing the order.



//Third Way- Arrow Fn
placeOrder("Burger", () => {
    console.log("Hi , How are you doing");
}); //this is an arrow function which is also a callback function. It is a shorter syntax for writing functions in JavaScript. In this case, the arrow function is passed as a callback to the placeOrder function, which will execute it after placing the order.