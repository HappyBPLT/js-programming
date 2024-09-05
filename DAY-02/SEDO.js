

// create a program that takes an array of integers with numbers like [1, 2, 3, 4, 5 , 500, 1000, 323 ]  

let numbers = [1, 2, 3, 4, 5, 500, 1000, 323];

// create a program that prints out the second largest number in the given array .

let max = numbers[0];
let secondMax = -Infinity;

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
    } else if(numbers[i] > secondMax && numbers[i] < max) {
        secondMax = numbers[i];
    }
}

console.log("Second largest number: " + secondMax);

