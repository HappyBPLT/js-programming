
let school = "Cydeo School"; 

console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school[0] );

console.log(school[school.length - 1]);

school.toLocaleLowerCase();

console.log(school); 

school = school.toUpperCase();

console.log("----------------------------------------------------------------");

let expectedResult = "JavaScript";
let actualResult = "javascript";

console.log(expectedResult === actualResult);

// ignore case sensitivity
console.log(expectedResult.toLowerCase() === actualResult.toLowerCase());

console.log("----------------------------------------------------------------");

console.log(school);

console.log("----------------------------------------------------------------");

let words = "Python Python";
words = words.replace("Python", "JavaScript");
console.log(words);

words = words.replace(/Python/g, "JavaScript");
console.log(words);

console.log("----------------------------------------------------------------");

let str = "abcdef12345hijklmnopqrs56789";
let newStr = str.replace(/\d/g, "");
console.log(newStr);

console.log("----------------------------------------------------------------");

let email = "cydeoschool@gmail.com";

let domain2 = email.substring(email.indexOf("@") + 1); 

console.log(domain2);

let domain3 = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain3);

console.log("----------------------------------------------------------------");

let employeeName = "B";
let employeeSalary = 85000; 

console.log(`My name is ${employeeName} and my salary is ${employeeSalary} US dollars.`); // string concatenation 

