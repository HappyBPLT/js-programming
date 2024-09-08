
/*
Attributes:
    name
    salary
    gender
    ...

Methods:
    work()
    ...
*/

class Employee{

    constructor(employeeName = 'Unknown', employeeSalary = 50_000){
        this.employeeName = employeeName;
        this.employeeSalry = employeeSalary;
    }

    work(){
        console.log(`${this.employeeName} is working`);
    }

}


let employee1 = new Employee('John Wick', 100_000);

console.log(employee1.employeeName);
console.log(employee1.employeeSalry);
console.log(employee1);

let employee2 = new Employee();

console.log(employee2);

let employee3 = new Employee("Sukran");

console.log(employee3);

console.log('------------------------------------------');

employee3.work();