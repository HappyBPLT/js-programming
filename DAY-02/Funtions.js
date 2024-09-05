/**
 * This function prints a greeting message to the console.
 *
 * @function greetings
 * @returns {void}
 */
function greetings() {
  console.log("Hello, Programmers!");
  console.log("Welcome to Playwright Automation!");
}


greetings();

console.log("----------------------------------------------------------------");

/**
 * This function prints a personalized greeting message to the console.
 * If no name is provided, it defaults to "Guest".
 *
 * @function displayeName
 * @param {string} [personName="Guest"] - The name of the person to greet.
 * @returns {void}
 */
function displayeName(personName = "Guest") {
  console.log(`Hello, ${personName}!`);
}


displayeName(); // this will pring name as undefined. 
displayeName("Mutlu");

console.log("----------------------------------------------------------------");

function addNumbers(num1, num2) {
    return num1 + num2;
} 
/**
 * This function adds two numbers together.
 *
 * @function addNumbers
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {number} The sum of the two input numbers.
 */
function addNumbers(num1, num2) {
    return num1 + num2;
}

result = addNumbers(2,7); 
console.log(result);

console.log("----------------------------------------------------------------");

