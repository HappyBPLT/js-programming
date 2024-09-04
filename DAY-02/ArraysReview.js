let elements = ["JavaScript" , 1 , 2.5 , true , false , "python"]; 
console.log(elements); 

console.log("----------------------------------------------------------------");

let students = ["Said" , "John" , "Jane"]; 
console.log(students); 
// console.log(students[3]); 

for (let i =0 ; i< students.length ; i++) {
    console.log(students[i]); 
} 


console.log("----------------------------------------------------------------");


for (let each of students) { // for of loop method
    console.log(each); 
}

console.log("----------------------------------------------------------------");

let employees = [ "john" , "Jamie" , "Mutlu" , "Berkay"];
console.log(employees.length); 
console.log(employees);

console.log("----------------------------------------------------------------");
employees.push("Tommy") ;
console.log(employees);

console.log("----------------------------------------------------------------");
employees.unshift("Berkay");

console.log(employees);

console.log("----------------------------------------------------------------");

employees.splice(0 , 1);
console.log(employees);

employees.unshift("Berkay");
employees.unshift("Berkay");
employees.unshift("Berkay");
employees.unshift("Berkay");
employees.unshift("Berkay");


console.log(employees);

employees.splice(0,6); 
console.log(employees);

console.log("----------------------------------------------------------------");

employees.shift();
console.log(employees);

employees.pop();
console.log(employees);
