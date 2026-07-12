function runTest(name, status, duration) {

    return `${name}: ${status} (${duration}ms)`;
}
const r = runTest("Login", "Passed", 300);
console.log(r);