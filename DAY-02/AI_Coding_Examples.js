// create an array of strings and add 10 employee names to it

let employees = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Sarah Johnson', 'David Brown', 'Emily Davis', 'Michael Wilson', 'Daniel Lee', 'Joshua Williams', 'Sarah Davis'];

// print the array to console 

console.log(employees);

// set the first employee's name to Mutlu and the last employee's name to Seden

employees[0] = 'Mutlu';
employees[employees.length - 1] = 'Seden';

// print the updated array to console

console.log(employees);
console.log('--------------------------------------------------------');

// display all the elements of the array in reverse order

for (let i = employees.length - 1; i >= 0; i--) {
    console.log(employees[i]);
}
console.log('--------------------------------------------------------');

let numbers = [100 , 200, 300 , 400 , 5, 6,7 ,8 , 10 ] ;
// write a program that displays the maximim and minimum values of the array

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log('Minimum value:', min);
    console.log('Maximum value:', max);
}

findMinMax(numbers);

// write a program that can sort the numbers array in ascending order , do not use any sort functions . 

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }  
    console.log('Sorted array in ascending order:', numbers);

let nums = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7];
let uniqueNums = [];

for (let i = 0; i < nums.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueNums.length; j++) {
        if (nums[i] === uniqueNums[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueNums.push(nums[i]);
    }
}

console.log('Array with duplicates removed:', uniqueNums);

console.log('--------------------------------------------------------');

/*

Create a class named "Item" with the following requirements:

Attributes :
    name , price , quantity 

Methods : 
    constructor that initializes all attributes 
    calcPrice : calculates the price of the item.

*/

class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calcPrice() {
        return this.price * this.quantity;
    }
}

let item1 = new Item('Apple', 0.5, 10);

console.log('Item Name:', item1.name);
