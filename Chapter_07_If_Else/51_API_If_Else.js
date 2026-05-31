let statusCode = 200;

if (statusCode === 200) {
    console.log("API are working fine");
} else if (statusCode === 404) {
    console.log("API not found");
} else if (statusCode === 500) {
    console.log("Internal Server Error");
} else {
    console.log("Not Status Code matched");
}