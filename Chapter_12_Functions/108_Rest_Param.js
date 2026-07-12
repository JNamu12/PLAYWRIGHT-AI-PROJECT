//Rest of the Param.

function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3, 4);
logResult('Payment Test', 5, 6, 7, 8, 9, 10);
logResult('reg Test', "Hello", "World", "Test");