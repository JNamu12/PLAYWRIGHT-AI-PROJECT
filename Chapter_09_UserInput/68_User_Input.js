import promptSync from "prompt-sync";
const prompt = promptSync();

let num = prompt("Enter a number: ");
num = Number(num); // Convert string to a number

if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}