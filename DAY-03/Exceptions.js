console.log("Test 1 Started");

try {
    console.log(result);

} catch (error) {
    console.error("Error Occured :  " + error);
}


console.log("Test 1 Finished");

console.log("----------------------------------");

console.log("Test 2 Started");

console.log("Test 2 Finished");

console.log("----------------------------------");

let browser = "Chrome"; 

switch (browser.toLowerCase()) {

    case "chrome":
        console.log("The browser is Chrome");
        break;
        
    case "firefox":
        console.log("The browser is Firefox");
        break;
        
    case "safari":  
    case "edge":
        console.log("The browser is Safari or Edge");
        break;
        
    default:
     throw new error("The browser is not supported");
}
console.log("----------------------------------");     
