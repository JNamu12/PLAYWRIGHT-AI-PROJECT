function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`trying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}


retry("Login Test");
retry("Registeration Test", 5, 2000);