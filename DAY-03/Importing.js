/*
const allUtility = require('./Utility'); //this imports everything 

let resultSquare = allUtility.square(9); 
console.log(resultSquare) ; 

let resultCube = allUtility.cube(3); 
console.log(resultCube);

let resultCalculate = allUtility.calculate(3,4 ,"+") ;
console.log(resultCalculate);
*/ 

const {calculate , square, cube} = require('./Utility') ; // it imports calculate function only

let resultCalculate = calculate(10,20 ,"*") ;
console.log(resultCalculate);

let resultCube = cube(3); 
let resultSquare = square (5);
