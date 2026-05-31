// if (age >= 18) {
//     console.log("you are an adult");
// } else {
//     console.log("you are a minor");
// }

//app.vwo.com -> viewer, editor or admin 

let isLoggedIn = true;
let userRole = "xyz";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("editor can edit the content");
    }
    else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    }
    else {
        console.log("No idea you may be a guest! role");
    }
} else {
    console.log("you are not logged in!!");
}