// Leap Year Check

// Rules:
// Divisible by 4 and not divisible by 100 -> Leap Year
// Divisible by 400 -> Leap Year
// else, not a Leap Year
let year = 2025;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}