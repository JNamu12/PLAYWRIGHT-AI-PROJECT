let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 2, 1];
number.sort()
console.log(number);

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);

//natual sorting, lexicographic sorting

nums.sort((a, b) => a - b); //asending
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);