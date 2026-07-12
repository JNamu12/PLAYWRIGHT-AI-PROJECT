// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function
function validdateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

// This is a function as an expression
const validateStatusCode_Exp = function (Status) {
    if (Status >= 200 && Status <= 300) {
        console.log("Request is fine!");
    }
}

// This is an arrow function
const validateStatusCode_arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}
// Test the functions
// validdateStatusCode(250);
// validateStatusCode_Exp(250);
// validateStatusCode_arrow(250);